import React, { useState } from 'react';
import { CommentReStyle } from './commentStyle';
import { onToggle, reDel } from '../../../store/modules/commentSlice';
import { TiHeartOutline,TiHeartFullOutline } from "react-icons/ti";
import { useDispatch } from 'react-redux';

const CommentReItem = ({item}) => {
    const {id,name,text} = item
    const dispatch = useDispatch()
    const [isreHeart,setIsreHeart] = useState(false)
    const relike = () => {
        dispatch(onToggle(id))
        setIsreHeart(!isreHeart)
    }
    return (
        <CommentReStyle>
            <div className="reply">
                <p>닉네임닉네임</p>
                <span><strong>@{name}</strong>{text}</span>
                    <div className="comment">
                        <em className="time">0초전</em>
                        <button className="relike" onClick={relike}>
                            {
                                isreHeart? <TiHeartFullOutline/> : <TiHeartOutline/>
                            }
                        </button> 
                        <button>답글달기</button> 
                        <button className="del" onClick={()=>dispatch(reDel(id))} >삭제</button>
                    </div>
            </div>
            
        </CommentReStyle>
    );
};

export default CommentReItem;
