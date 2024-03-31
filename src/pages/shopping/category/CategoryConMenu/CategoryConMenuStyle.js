import styled from "styled-components";

export const CategoryConMenuStyle = styled.div`
width: 12%;
box-sizing: border-box;
padding: 10px;
font-size:15px;
font-weight: 700;
/* position: fixed; */
/* right: 0; */
/* top: 20%; */
h4{border-bottom: 1px solid #dcdcdc; padding-bottom:5px}
h4.on{
color:#54d1ff;
border-bottom: 1px solid #54d1ff;
}
`
export const CategoryConMenuItemStyle = styled.div`
padding:10px; box-sizing:border-box;
.arrow{margin-left:20px; cursor:pointer;}
dd{height:0;overflow: hidden;transition: 0.6s;
&.on{display:block;height:300px;cursor: pointer;}
}
`
