export interface IProductData {
  price: string | null,
  name: string | null,
  url: string
}

export interface IPage {
  name: string,
  path: string,
  element: () => JSX.Element
}