/**
 * blog controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::blog.blog', ({ strapi }) =>  ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const post = await strapi.entityService.findMany("api::blog.blog", query);
    const sanitizedEntity = await this.sanitizeOutput(post, ctx);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
