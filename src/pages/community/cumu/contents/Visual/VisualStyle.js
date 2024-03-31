import styled from "styled-components";

export const VisualWarp = styled.div`
    &.visual{
        width: 1400px; 
        div{
            display: flex;
            .bestblog{
                display: block;
                width: 1103px; 
                overflow: hidden;
                border-radius: 14px;
                height: 600px;
                img{
                    width: 1103px; height: 600px;
                    transition: all 0.2s linear;
                    &:hover{
                    transform: scale(1.01);
                    }
                }
                p{
                    .profile{
                        position: relative;
                        width: 30px;
                        height: 30px;
                        border: 1px solid gray;
                        border-radius: 200px;
                        top: -61px;
                        left: 25px;
                    }
                    span{
                        position: relative;
                        font-weight: 700;
                        top: -70px;
                        left: 35px;
                    }
                }
            }
           .event{
                width: 260px;
                height: 600px;
                border-radius: 10px;
           }
           .swiper {
                width: 317px;
                margin-left: 30px;
                .swiper-slide {
                    text-align: center;
                    font-size: 18px;
                    background: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                    display: block;
                    object-fit: cover;
                    width: 317px;
                    }
                }
            }
        }
    }

`