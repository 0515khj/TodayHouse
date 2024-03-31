import React from 'react';
import { CommentUlStyle } from './commentStyle';
import CommentItem from './CommentItem';
import { useSelector } from 'react-redux';

const CommentList = () => {
    const {data} = useSelector(state=>state.comment)
    return (
        <CommentUlStyle>
            {
                data.map (item=><CommentItem key={item.id} item={item} />)
            }
        </CommentUlStyle>
    );
};

export default CommentList;
