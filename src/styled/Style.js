import styled from "styled-components";

export const HeaderWrap = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9999;
    background: #fff;
    .inner {position: relative;}
        height: 80px;
    h1{position: absolute; left: 0; top: 28%; transform: translateY(50%);
    img {width: 82px; height: 35px;  }}
    p{
        text-align: right; 
        .login {height: 35px; position: relative; top: 32px; left:-81px; padding: 0 13px; cursor:pointer; font-weight:700; a{color: #fff;}}
        .logout {height: 35px; position: relative; top: 32px; left:-81px; padding: 0 13px; cursor:pointer; font-weight:700; a{color: #fff;}}
        .join {height: 35px; position: relative; top: 32px ;left:-71px; cursor:pointer; font-weight:700; a{color: #fff;}}
    }
    `
export const NavGnb = styled.nav`
position: absolute;
left: 10%;
transform: translateY(120%);
`

export const Menu = styled.ul`
display: flex;
li{margin-right: 10px; font-size:18px; font-weight:700;

}
a{
    &:hover{color: #54d1ff }    
    &.on{color: #54d1ff}
}
`


export const FooterWrap = styled.footer`
margin-top:50px;
.inner {
    padding-top:30px; 
    .ftall{
        display:flex;
        padding-left:60px;
        padding-right:50px;
        justify-content:space-between;

        .con1{width:430px;
        margin-right:50px;
        position: relative;
        &::after{
            content:'';
            display:block;
            width:1px;
            height:270px;
            background: #dcdcdc;
            position:absolute; right:0; bottom:17px;
        }
        .con1ul { 
            li{ font-size:14px; color:#999; position: relative;
                padding-bottom:3px;
                margin-left:10px;
                    padding-left: 10px;
                &::after {
                    content:'';
                    display:block;
                    width:5px;
                    height:5px;
                    background: #000;
                    border-radius:50%;
                    position:absolute; left:0; top:50%;
                    transform:translateY(-50%);

                }
                }
        }
        .con1inner1{ display:flex;
            h2{font-size:20px; font-weight:600; margin-bottom:20px; margin-right:5px ;
                &:hover{border-bottom: 1px solid #000; }
            }
            p{line-height:2;}
        }
        .con1inner{ display:flex;
        h3{ font-size:18px; font-weight:600;margin-right: 10px;
            &:hover{border-bottom: 1px solid #000;}
        }
        p{ color:#999; line-height:2; }
    }

        .ptn1{border: 1px solid #999; width:210px; height:30px; text-align:center; margin:10px 0 10px; cursor: pointer;}
        .ptn2{border: 1px solid #999; width:90px; height:30px; text-align:center; margin:10px 0 10px; cursor: pointer;
           
        }
        }

        .con2{display:flex;
            flex-wrap:wrap;
            cursor: pointer;
            margin-right:30px ;position: relative;
        &::after{
            content:'';
            display:block;
            width:1px;
            height:270px;
            background: #dcdcdc;
            position:absolute; right:0; bottom:17px;
        }

        width:340px;
    p{
        /* padding-right:60px; */
        margin-bottom:20px;
        transition:0.3s;
        &:hover{border-bottom: 1px solid #000;}

    }
        .con2p{margin-right:86px;}
        .con3p{margin-right:17px; font-weight:600;}
}

    .con3{
        width:600px;
        font-size:13px;
        /* padding-bottom:30px; */
        /* p{padding:5px;} */
        .icons{display:flex;
            
            p{margin-right:10px; width:30px; height:30px; font-size:20px; 
                background: #999; border-radius:50%; 
                text-align:center; color:#fff;
                }
        }
        .ftimg{display:flex;
        

            .ftimg1{display:flex;
                padding:10px;
                margin-right:10px;
                 border: 1px solid #999;
                img{height:40px; width:40px;}
                em{padding-left:10px ;
                display:block;
                width: 150px; 
                word-wrap: break-word;}
            }
            .ftimg2{border: 1px solid #999; margin-right:10px ; width:150px;
            text-align:center;
                
            }
            .ftimg3{border: 1px solid #999; width:150px;
            text-align:center;}
        }
    }
    }
}

`

export const SubMenuList = styled.div`
position: fixed;
left: 0;
top: 70px;
width: 100%;
z-index: 9999;
background: #fff;
ul{display:flex; padding: 15px;
li{margin-right:15px; font-weight:700;cursor: pointer;
    &:hover{
        color: #54d1ff
    }    
    &.on {color: #54d1ff; }
}
}
`

export const SpecialPrice = styled.div`
background: #FF7777;
width: 35px;
height: 26px;
line-height: 26px;
text-align: center;
box-sizing: border-box;
color: #fff;
font-size: 11px;
border-radius: 5px;
`


export const FreeDelivery = styled.div`
background: #dcdcdc;
width: 50px;
height: 26px;
line-height: 26px;
text-align: center;
box-sizing: border-box;
color: black;
font-size: 11px;
border-radius: 5px;
`

export const DeliveryToday = styled.div`
img{width: 65px;}
`

export const SalePercent = styled.span`
font-size: 18px;
margin-right: 10px;
color: #54d1ff;
font-weight: bold;
`

export const HouseButton = styled.button`
padding: 10px;
color: #fff;
background:#54d1ff;
border: none;
border-radius: 5px;
font-weight: 700;
`

export const FlexBox = styled.div`
display: flex;
`
