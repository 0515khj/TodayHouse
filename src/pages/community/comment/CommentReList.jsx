import React from 'react';
import { useSelector } from 'react-redux';
import CommentReItem from './CommentReItem';

const CommentReList = ({replies}) => {
    const {redata} = useSelector (state=>state.comment)
    return (
        <div>
            {
                redata.map(item=><CommentReItem key={item.id} item={item} />)
            }
        </div>
    );
};

export default CommentReList;
