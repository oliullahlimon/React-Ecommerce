import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isLoadingSingle: false,
  isErrorSingle: false,
  singleProduct: {},
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(url);
      console.log(res?.data);
      const products = await res?.data;
      dispatch({ type: "DATA", payload: products });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res?.data;
      console.log(singleProduct);
      dispatch({ type: "SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);
  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(AppContext);
};

// practice
const AppConsumer = createContext();
const initialState2 = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const AppProviderConsumer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState2);
  return (
    <AppConsumer.Provider value={{ ...state }}>{children}</AppConsumer.Provider>
  );
};

export { AppProviderConsumer };
