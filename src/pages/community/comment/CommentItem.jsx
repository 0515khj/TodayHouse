import React, { useState } from 'react';
import { CommentLiStyle } from './commentStyle';
import { onDel, onReply, onToggle, reAdd, rechangeInput } from '../../../store/modules/commentSlice';
import { TiHeartOutline,TiHeartFullOutline } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import CommentReList from './CommentReList';

const CommentItem = ({item}) => {
    const {user,authed} = useSelector (state=>state.auth)
    const {id,name,text} = item
    const dispatch = useDispatch()
    const {retxt} = useSelector(state=>state.comment)
    const [isShow,setIsShow] = useState(false)
    let toggle = () => {
        setIsShow(!isShow)
    }
    const [isHeart,setIsHeart] = useState(false)
    const like = () => {
        dispatch(onToggle(id))
        setIsHeart(!isHeart)
    }
    const reSubmit = (e) => {
        e.preventDefault()
        if (!text) return
        dispatch (reAdd (retxt))
        dispatch (rechangeInput(''))
    }
    return (
        <CommentLiStyle>
            <dt className={isShow?"on":""} >
               {authed && id >= 6 ? <p>{user.username}</p> : <p>{name}</p>}
                <span>{text}</span>
                <div className="comment">
                    <em className="time">0초전</em>
                    <button className="like" onClick={like}>
                        {
                            isHeart? <TiHeartFullOutline/> : <TiHeartOutline/>
                        }
                    </button> 
                    <button onClick={toggle}>
                        답글달기</button> 
                    <button className="del" onClick={()=>dispatch(onDel(id))} >삭제</button> 
                </div>
            </dt>
            <dd className={isShow?"on":""}>
                {
                    isShow && (
                        <>
                            <form onSubmit={reSubmit}>
                                <input type="text" value={retxt} onChange={(e)=>dispatch(rechangeInput(e.target.value))}  />
                                <button type="submit">입력</button>
                            </form>
                        </>
                    ) 
                }
            </dd>
            <CommentReList replyId={id} />
        </CommentLiStyle>
    );
};

export default CommentItem;

