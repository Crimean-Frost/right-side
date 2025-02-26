"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const fp = require("lodash/fp");
const load = async (uid, oldEntries) => {
  const updates = [];
  await strapi.db.transaction(async ({ trx }) => {
    const contentTypes = Object.values(strapi.contentTypes);
    const components = Object.values(strapi.components);
    for (const model of [...contentTypes, ...components]) {
      const dbModel = strapi.db.metadata.get(model.uid);
      for (const attribute of Object.values(dbModel.attributes)) {
        if (attribute.type !== "relation")
          continue;
        if (attribute.target !== uid)
          continue;
        if (attribute.inversedBy || attribute.mappedBy)
          continue;
        const joinTable = attribute.joinTable;
        if (!joinTable)
          continue;
        const { name } = joinTable.inverseJoinColumn;
        const oldEntriesIds = oldEntries.map((entry) => entry.id);
        const relations = await strapi.db.getConnection().select("*").from(joinTable.name).whereIn(name, oldEntriesIds).transacting(trx);
        if (relations.length === 0)
          continue;
        updates.push({ joinTable, relations });
      }
    }
  });
  return updates;
};
const sync = async (oldEntries, newEntries, oldRelations) => {
  const newEntryByLocale = fp.keyBy("locale", newEntries);
  const oldEntriesMap = oldEntries.reduce(
    (acc, entry) => {
      const newEntry = newEntryByLocale[entry.locale];
      if (!newEntry)
        return acc;
      acc[entry.id] = newEntry.id;
      return acc;
    },
    {}
  );
  await strapi.db.transaction(async ({ trx }) => {
    // const con = strapi.db.getConnection();
    for (const { joinTable, relations } of oldRelations) {
      const newRelations = relations.map((relation) => {
        const column = joinTable.inverseJoinColumn.name;
        const newId = oldEntriesMap[relation[column]];
        return { ...relation, [column]: newId };
      });
      // await con.batchInsert(joinTable.name, newRelations).transacting(trx);
      await trx.batchInsert(joinTable.name, newRelations, 1000);
    }
  });
};
exports.load = load;
exports.sync = sync;
//# sourceMappingURL=unidirectional-relations.js.map
