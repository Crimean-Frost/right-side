/**
 *service controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::service.service', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::service.service", query);
    const sanitizedEntity = await this.sanitizeOutput(post, ctx);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
