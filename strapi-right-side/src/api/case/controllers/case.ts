/**
 * case controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::case.case', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::case.case", query);
    const sanitizedEntity = await this.sanitizeOutput(post, ctx);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
