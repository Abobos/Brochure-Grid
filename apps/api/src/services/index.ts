const cmsUrl = process.env.CMS_URL;

const apiCLient = {
  getCity: async (name: string) => {
    try {
      const {
        data: [city],
      } = await (
        await fetch(`${cmsUrl}/cities?filters[url_representation]=${name}`)
      ).json();

      return city;
    } catch (error) {
      throw error;
    }
  },

  getProduct: async (name: string) => {
    try {
      const {
        data: [product],
      } = await (
        await fetch(`${cmsUrl}/products?filters[url_representation]=${name}`)
      ).json();

      return product;
    } catch (error) {
      throw error;
    }
  },

  getBrochure: async (
    _filter: Partial<{
      lat: number;
      lng: number;
      publisherIds: string;
      query: string;
      page: number;
      size: number;
    }>
  ) => {
    const data = await import("../brochure.json");

    return data;
  },
};

export default apiCLient;
