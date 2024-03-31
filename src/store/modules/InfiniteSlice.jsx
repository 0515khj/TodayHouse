import { createSlice } from '@reduxjs/toolkit'
import productData from '../../assets/api/shoppingProducts'
// {<script src="https://gist.githubusercontent.com/plzcoboo/a296249d9b94b2c9174da897eebc06d4/raw/bdcaa2d7b40de853c92b63116f48e8f5a292017c/ProductData.json"></script>}

const initialState = {
getProduct:productData
}

export const InfiniteSlice = createSlice({
  name: 'Infinite',
  initialState,
  reducers: {
    increment: (state) => {
    },
  },
})

export const { increment } = InfiniteSlice.actions

export default InfiniteSlice.reducer