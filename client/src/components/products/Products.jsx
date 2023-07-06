import Subtitle from "components/ui/subtitle/Subtitle";
import Product from "components/ui/product/Product";

import "./Products.scss";
import Button from "components/ui/button/Button";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react"
import { fetchDevices } from "http/deviceApi"
import { Context } from "index"

const Products = () => {
  const { device } = useContext(Context);

  useEffect(() => {
     fetchDevices(null, null, 1, 8).then(data => {
         device.setDevices(data.rows)
         device.setTotalCount(data.count)
     })
 }, [])

  return (
    <section className="products">
      <Subtitle name="Наши продукты" title="Ознакомьтесь с нашими продуктами" />
      <div className="products-list">
        {device.devices.map((item) => (
          <div className="products-column" key={item.id}>
            <Product item={item} />
          </div>
        ))}
      </div>
      <Button classNames="center">
        <Link to="/all-products">Смотреть все продукты</Link>
      </Button>
    </section>
  );
};

export default Products;