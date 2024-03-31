import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { CommentWrap } from './commentStyle';

const HouseComment = () => {
    return (
        <CommentWrap>
            <CommentForm/>
            <CommentList/>
        </CommentWrap>
    );
};

export default HouseComment;