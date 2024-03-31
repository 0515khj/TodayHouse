
import React from 'react';
import { CommentStyle } from './commentStyle';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput, onAdd } from '../../../store/modules/commentSlice';
import { useNavigate } from 'react-router-dom';

const CommentForm = () => {
    const {text,data} = useSelector (state=>state.comment)
    const {authed} = useSelector (state=>state.auth)
    const dispatch = useDispatch()
    const navi = useNavigate()
    const onSubmit = (e) => {
        if(authed){
            e.preventDefault()
            if (!text) return
            dispatch (onAdd(text))
            dispatch (changeInput(''))
        }else{navi('/login')}
    }

    return (
        <CommentStyle>
            <div className="commentTitle">
                <h3>댓글 <span>{data.length}</span> </h3>
            </div>
            <div className="commentInput">
            <img src="./images/commentsmile.png" alt="" />
                <form onSubmit={onSubmit}>
                        <input type="text" placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)" value={text} onChange={(e)=>dispatch(changeInput(e.target.value))} />
                        <button type="submit" >입력</button>
                </form>
            </div>
        </CommentStyle>
    );
};

export default CommentForm;

