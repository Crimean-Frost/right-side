/**
 * category controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::category.category', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::category.category", query);
    const sanitizedEntity = await this.sanitizeOutput(post, ctx);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
