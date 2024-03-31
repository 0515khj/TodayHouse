import styled from "styled-components"


export const JoinWrap = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
text-align: center;
.inner{width:350px;.already{margin-top:10px; display:block}}
input {height:40px; border:1px solid #dcdcdc;}
select{height:46px; border:1px solid #dcdcdc;}
.joinSubmit{
    margin-top: 30px;
    width: 100%;
    height: 50px;
}

`

export const FormStyle = styled.div`
label{display:block; text-align:left; margin-top:20px;}
em{display:block ; text-align:left; font-size:14px; margin-top:5px}
input{width:100%;padding:5px; font-size:15px}
`