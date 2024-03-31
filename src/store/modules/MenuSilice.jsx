import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cumu:false,shop:false,move:false
}

export const MenuSilice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    onCumu :(state,action)=>{
        state.cumu=true
        state.shop=false
        state.move=false
    },
    onShop : (state,action)=>{
        state.cumu=false
        state.shop=true
        state.move=false
    },
    onMove : (state,action)=>{
        state.cumu=false
        state.shop=false
        state.move=true
    },
    onMain : (state,action)=>{
        state.cumu=false
        state.shop=false
        state.move=false
    },
  }
})


export const { onCumu,onShop,onMove,onMain} = MenuSilice.actions
export default MenuSilice.reducer