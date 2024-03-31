import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    text:'',
    retxt:'',
    data: [
        {id:1, name:'구월동불주먹', text:'너무예뻐요',},
        {id:2, name:'산타', text:'이렇게 넓은 집을 센스있게 꾸미시다니 대단해요 :) 거실 뷰가 너무 아름다워요',},
        {id:3, name:'게으른덕순이', text:'유리컵 인스타 정보 알수있을까요..!'},
        {id:4, name:'어글리오렌지', text:'와 집 너무 잘봤어요 ㅠㅠ진짜 리모델링 신의 한수네요'},
        {id:5, name:'내일의집', text:'예쁜게 너무 많아서 눈이 돌아간다는...'},
    ],
    redata: [
        {id:1, replyId:1, name:'두두', text:'댓글 감사합니다:) 좋은하루되세요!'}
    ],
    filterReply:[],
    no : 6

}
export const commentSlice = createSlice({
    name:'commentSlice',
    initialState,
    reducers:{
        onAdd : (state,action) => {
            state.data = [...state.data, {id:state.no++, text:action.payload}]
        },
        reAdd : (state,action) => {
            state.redata = [...state.redata, {id:state.no++, text:action.payload}]
        },
        onDel : (state,action) => {
            state.data = state.data.filter(item=>item.id!==action.payload)
        },
        reDel : (state,action) => {
            state.redata = state.redata.filter(item=>item.id!==action.payload)
        },        
        onToggle : (state,action) => {
            // state.data = state.data.map(item => item.id === action.payload ? {...item,isChk : !item.isChk} : item)
            const like = state.data.find( item => item.id === action.payload )
            if (like) {
                like.isChk = !like.isChk
            }
        },
        changeInput : (state,action) => {
            state.text = action.payload
        },
        rechangeInput : (state,action) => {
            state.retxt = action.payload
        },
        onReply : (state,action) => {
            const {replyId} = action.payload;
            state.filterReply = state.redata.filter(item=>item.replyId === replyId)
        }
    }
})

export const { onAdd,reAdd,onDel,reDel,onToggle,changeInput,rechangeInput,onReply } = commentSlice.actions
export default commentSlice.reducer
