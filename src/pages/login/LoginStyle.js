import styled from "styled-components"

export const LoginWrap = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
text-align: center;
.inner{width:300px;}
input{box-sizing:border-box; padding:15px;width:100% ;border: 1px solid #dcdcdc;} 

h1{img{width:150px}}
span{font-size:15px; margin-right:10px; cursor: pointer;}
em{font-size:12px}
button{margin-top:30px; margin-bottom:30px;width:100% ;height:50px;border:none;cursor: pointer; background:#54d1ff; color: #fff; border-radius:5px}
`


export const EmailInput = styled.p`
input{border-bottom:none; margin-top:30px}
`

export const SnsLogoBox = styled.ul`
display: flex;
justify-content: center;
margin-top: 10px;
margin-bottom: 10px;
li{margin-right:10px; img{width:50px} cursor: pointer;}
`