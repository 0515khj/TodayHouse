import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 user : null,
 authed: false,
 dataList:[{id:0, email:'hello@naver.com',password:'hi1234',username:'두두'}]
}
let no = 0;
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state,action) => {
        const {email, password} = action.payload
        const findEmail = state.dataList.find(item => item.email === email)
        const findpassword = state.dataList.find(item => item.password === password)
        if(findpassword === undefined || findEmail === undefined) {alert('일치하는 정보가 없습니다')}
        if( findEmail.password === password) {
          state.user = findEmail
          state.authed = true
        }
    },
    logout:(state,action) =>{
        state.user = null
        state.authed = false
    },
    singup:(state,action) => {
      const {email, tel , username ,password} = action.payload
      state.dataList = [...state.dataList, {id:no++,...action.payload}]
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, singup} = authSlice.actions

export default authSlice.reducer