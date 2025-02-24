/**
 * employee controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::employee.employee', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::employee.employee", query);
    const sanitizedEntity = await this.sanitizeOutput(post, ctx);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
