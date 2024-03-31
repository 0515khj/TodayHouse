import styled from "styled-components";

export const TypeAWarp = styled.div`
    width: 1400px;
    .swiper{
        width: 100%;
        height: 100%;
        .swiper-slide{
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            margin: 0;
            padding: 0;
            width: auto;
            li{
                a{
                    display: inline-block;
                    height:'230px';
                    overflow: hidden;
                    border-radius: '10px';
                    .main{
                        transition: 0.2s;
                        &:hover{
                            transform: scale(1.1);
                            border-radius: '10px';
                        }
                    }
                }
            }
        }
    }
`    