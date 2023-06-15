/**
 * Seeds the database with data.
 */
export const seedDatabase = async (strapi) => {
  if (process.env.NODE_ENV !== "development") return;

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
};
