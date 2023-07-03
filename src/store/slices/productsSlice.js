import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hook';

const productsAdapter = createEntityAdapter()

const initialState = productsAdapter.getInitialState({
   productsLoadingStatus: 'idle'
})

export const fetchProducts = createAsyncThunk(
   'products/fetchProducts',
   async () => {
      const { request } = useHttp()
      return await request('http://localhost:3001/products')
   }
)

const heroesSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      heroCreated: (state, action) => {
         productsAdapter.addOne(state, action.payload)
      },
      heroDeleted: (state, action) => {
         productsAdapter.removeOne(state, action.payload)
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchProducts.pending, state => { state.productsLoadingStatus = 'loading' })
         .addCase(fetchProducts.fulfilled, (state, action) => {
            state.productsLoadingStatus = 'idle';
            productsAdapter.setAll(state, action.payload)
         })
         .addCase(fetchProducts.rejected, state => {
            state.productsLoadingStatus = 'error'
         })
         .addDefaultCase(() => { })
   }
});

const { actions, reducer } = heroesSlice;

export default reducer;


const { selectAll } = productsAdapter.getSelectors(state => state.products);
