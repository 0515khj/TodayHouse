import styled from "styled-components"


export const CommentWrap = styled.div`

margin-top: 50px;

`


export const CommentStyle = styled.div`
    .commentTitle {
        h3 {font-size: 20px; font-weight: 600; span {color:#34C5F0; font-weight: 700;}}
    }
    .commentInput { display: flex; align-items: center; 
            img {width:30px; height:30px;align-items: center; } 
            input {width: 660px; height:50px; border: 1px solid #dcdcdc; border-radius:10px; margin-right: 10px; margin-left: 10px;}
            button {width:70px; height: 50px; background: #34C5F0; color:#fff; border:none; border-radius:10px; font-size: 15px;}
        
    }

`

export const CommentUlStyle = styled.ul`
    width: 685px; background: #F7F9FA; padding: 50px; margin-top: 50px;

`

export const CommentLiStyle = styled.dl`
    border-bottom: 1px solid #dcdcdc;
    padding: 15px; box-sizing: border-box;
    dt {
        p {font-size: 16px; font-weight: 600;}
        span {font-size: 16px; }
        .comment { 
            display: flex; color:#828C94 ;
            em { font-size: 16px;}
            button { border:none; background:none; cursor: pointer; font-size: 16px; color:#828C94 }
        }
    }
    dd {
        &.on{ overflow: hidden; display: block; padding: 10px;
            input {width: 600px; height:40px; border: 1px solid #dcdcdc; border-radius:10px; margin-right: 10px; margin-left: 10px;}
            button {width:50px; height: 40px; background: #34C5F0; color:#fff; border:none; border-radius:10px; font-size: 15px;}
            }
    }
    

`
export const CommentReStyle = styled.li`
    padding: 20px;
    p {font-size: 16px; font-weight: 600;}
    span {font-size: 16px;
        strong {color:#34C5F0; margin-right: 10px;} }
        .comment {
            display: flex; color:#828C94 ;
            em { font-size: 16px;}
            button { border:none; background:none; cursor: pointer; font-size: 16px; color:#828C94 }
        }
`