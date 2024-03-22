import { Request, Response } from "express";
import { ICategoryData, IProductData } from "../../global/interfaces";
import { scrapeCategoryList, scrapeProductList } from "../../services/puppeteerService";

const productListUrl: string = "https://www.etsy.com/c/jewelry?ref=homepage_shop_by_category_card";

export const getData = async (_req: Request, res: Response): Promise<void> => {
  try {
    const data: ICategoryData[] = await scrapeCategoryList();
    res.status(200).send(data);
  } catch (error: unknown) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const getProductList = async (_req: Request, res: Response): Promise<void> => {
  try {
    const data: IProductData[] = await scrapeProductList(productListUrl);
    res.status(200).send(data);
  } catch (error: unknown) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
