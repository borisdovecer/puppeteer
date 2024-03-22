import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "@app/api/api.ts";
import { IProductData } from "@app/global/interfaces.ts";

const Home = () => {
  const [products, setProducts] = useState<IProductData[]>([]);

  useEffect(() => {
    getProducts().then((data: IProductData[]) => {
      setProducts(data);
    });
  }, []);
    
  return (
    <div>
      {products.map((product: IProductData) => (
        <div key={product.name} className="py-2 border-b border-black">
          <Link to={product.url}><h3>{product.name}</h3></Link>
          <p>{product.price}</p>
          <p>{product.url}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;