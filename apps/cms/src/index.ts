export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    /**
     * Seeds the database with data.
     */
    const citySeed = strapi.entityService.create("api::city.city", {
      data: {
        name: "Berlin",
        description: "Berlin is a cool city",
        url_representation: "berlin",
        enabled: true,
        publishedAt: new Date().toISOString(),
      },
    });

    const productSeed = strapi.entityService.create("api::product.product", {
      data: {
        name: "Beer",
        description:
          "Bier also known as Beer is a nice drinks with herbal supplements",
        url_representation: "bier",
        enabled: true,
        publishedAt: new Date().toISOString(),
      },
    });

    await Promise.all([citySeed, productSeed]);
  },
};
