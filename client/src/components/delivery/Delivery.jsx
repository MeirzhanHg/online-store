import { deliveryItems } from "./Delivery.data.js";
import "./Delivery.scss";

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery__items">
        {deliveryItems.map((item, index) => (
          <div className="delivery__item" key={index}>
            {item.icon}
            <h4 className="delivery__title">{item.title}</h4>
            <p className="delivery__desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
