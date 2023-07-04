import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAll } from "store/slices/productsSlice";
import ProductItem from "./ProductItem";

const ProductsItems = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchProducts());
   }, []);

   const state = useSelector(selectAll);
   const loader = useSelector(state => state.productsLoadingStatus);

   const render = (arr) => {
      if (arr.length === 0) {
         return (
            <div className="hero">
               <h5 className="text-center mt-5">loading</h5>
            </div>
         );
      }

      return arr.map(({ id, ...props }) => {
         return (
            <div key={id} className="hero">
               <ProductItem {...props} />
            </div>
         );
      });
   };

   const elements = render(state);
   
   return <div component="ul">{elements}</div>;
};

export default ProductsItems;
