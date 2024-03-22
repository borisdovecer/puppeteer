import puppeteer, {Browser, type Page} from "puppeteer";
import {ICategoryData, IProductData} from "../global/interfaces";

const websiteUrl: string = "https://www.etsy.com/";

export const scrapeCategoryList = async (): Promise<ICategoryData[]> => {
  const browser: Browser = await puppeteer.launch();
  const page: Page = await browser.newPage();
  await page.goto(websiteUrl);
  const categoryLinkSelector = "div.categories-grid.categories-grid--initial-categories.wt-block-grid-xs-1.wt-block-grid-lg-6.wt-pb-xs-1 > div > div > a";

  const categories: ICategoryData[] = await page.$$eval(`${categoryLinkSelector}`, (links) =>
    links.map((link) => ({
      name: link.innerText.trim(),
      url: link.href,
    }))
  );

  await browser.close();
  return categories;
};

export const scrapeProductList = async (pageUrl: string): Promise<IProductData[]> => {
  const browser: Browser = await puppeteer.launch();
  const page: Page = await browser.newPage();
  await page.goto(pageUrl, { waitUntil: "networkidle0" });

  const productListSelector: string = "div.wt-bg-white.wt-display-block.wt-pb-xs-2.wt-mt-xs-0 > div > div > div > ol > li";

  const products: IProductData[] = await page.$$eval(`${productListSelector}`, (items: Element[]) =>
    items.map((item: Element) => {
      const anchorElement: HTMLAnchorElement | null = item.querySelector("div > div > a");
      const nameElement: HTMLHeadingElement | null = item.querySelector("h2");
      const priceElement: HTMLParagraphElement | null = item.querySelector(".currency-value");

      return {
        url: anchorElement?.href || null,
        name: nameElement?.textContent!.trim() || null,
        price: priceElement?.textContent!.trim() || null,
      };
    })
  );

  await browser.close();
  return products.slice(0, 10);
};