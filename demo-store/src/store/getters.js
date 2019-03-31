
export const productGetters = {
  // All products
  allProducts: (state, getters) => {
    return state.products;
  },
  // Get Product by ID
  productById: (state, getters) => (id) => {
    if (getters.allProducts.length > 0) {
      // eslint-disable-next-line no-underscore-dangle
      return getters.allProducts.filter(p => p._id === id)[0];
    }
    return state.product;
  },
};

export const manufacturerGetters = {
  // All manufacturers
  allManufacturers: state => state.manufacturers,
}

