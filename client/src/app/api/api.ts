import { AxiosResponse } from "axios";
import axios from "@app/config/axiosConfig";
import { IProductData } from "@app/global/interfaces.ts";

export const getProducts = async (): Promise<IProductData[]> => {
  try {
    const response: AxiosResponse<IProductData[]> = await axios.get("/products");
    return response.data;
  } catch (error: unknown) {
    console.error("Error fetching data:", error);
    return [];
  }
};

