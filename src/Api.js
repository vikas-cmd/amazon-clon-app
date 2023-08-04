import axios from "axios";
export const apiData = async () => {
  const productData = await axios.get("https://fakestoreapi.com/products");
  return productData.data;
};
