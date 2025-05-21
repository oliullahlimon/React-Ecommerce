const productReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "DATA":
      const featureData = action.payload.filter((item) => {
        return item.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "ERROR":
      return { ...state, isError: true, isLoading: false };

    case "SINGLE_LOADING":
      return { ...state, isLoadingSingle: true };

    case "SINGLE_PRODUCT":
      return {
        ...state,
        isLoadingSingle: false,
        singleProduct: action.payload,
      };

    case "SINGLE_ERROR":
      return { ...state, isLoadingSingle: false, isErrorSingle: true };

    default:
      return state;
  }
};

export default productReducer;

// // practice
const productReducer2 = (state, action) => {
  return state;
};
