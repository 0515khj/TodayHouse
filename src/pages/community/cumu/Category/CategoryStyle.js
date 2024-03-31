import styled from "styled-components";

export const CateWarp = styled.div`
        .list {
            width: 1400px;
            height: 150px;
            display:flex;
            border-radius: 5px;
            margin-bottom: 10px;

            .swiper {
                margin-left: 0;
                margin-right: 0;
                width: 1400px;
                .swiper-slide {
                    text-align: center;
                    font-size: 18px;
                    background: #fff;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    li{
                        width: 100px;
                        margin: 18px 5px ;
                        border-radius: 10px;
                        img {
                            margin: 0 auto;
                            display: block;
                            width: 100px;
                            height: 80px;
                            object-fit: cover;
                        }
                        p{ text-align:center; font-weight:700 }
                    }
                }
            }
        }
        .btns{
            display: flex;
        }
`