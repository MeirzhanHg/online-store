import './Products.scss'

const ProductItem = ({ name, description, element, price }) => {
   return (
      <div className="border">
         <div>name: {name}</div>
         <div>description: {description}</div>
         <div>filter: {element}</div>
         <div>price: {price}$</div>
      </div>
   );
};

export default ProductItem;
