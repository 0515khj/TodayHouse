import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
 
export const getProduct = createAsyncThunk(
    'product/getProduct',
    async() => {
        const url = `https://gist.githubusercontent.com/plzcoboo/a296249d9b94b2c9174da897eebc06d4/raw/b5157468cc00b524d166de6c53eb1eed6fac5b76/ProductData.json`
        const res = await axios.get(url)
        return res.data
    }
) 

const initialState = {
     products :[] ,
     loading : true ,
     state : null,
     error : null
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
      builder
      .addCase( getProduct.pending, (state,action) => {
        state.loading = true
        state.state = 'loading'
      })
      .addCase( getProduct.fulfilled, (state,action) => { // action res.data 들어온다
        state.loading = false
        state.state = 'fulfilled'
        state.products = action.payload
      })
      .addCase( getProduct.rejected, (state,action) => {
        state.loading = true
        state.state = 'rejected'
      })
    }
})
// export const {} = todoSlice.actions
export default productSlice.reducer
