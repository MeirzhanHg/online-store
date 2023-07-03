import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from 'store/slices/productsSlice'

const ProductsItems = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchProducts())
   }, [])

   const state = useSelector((state) => state.products.entities);
   console.log(state);
   
   return <div>ProductsItems</div>;
};

export default ProductsItems;
