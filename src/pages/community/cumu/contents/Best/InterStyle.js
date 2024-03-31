import styled from "styled-components";

export const InterWarp = styled.div`
margin: 20px 0;
    div{
        h2{
            margin-left: 10px;
            cursor: pointer;
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 15px;


            &:hover{
                color: #54d1ff;
            }
        }
        .more{
            position: relative;
            right: -1032px;
            font-weight: 800;
            cursor: pointer;
            &:hover{
                color: #54d1ff
            }
        }
    }
    .main_con{
        display: flex;
        a{
            margin-right: 28px;
            div{
                width: 330px;
                height: 270px;
                display: block;
                overflow: hidden;
                border-radius: 10px;
                img{
                    width: 330px;
                    height: 270px;
                    border-radius: 10px;
                    transition: 0.2s;
                    &:hover{
                        transform: scale(1.2);
                    }
                }
            }
            .title{
                color: #54d1ff;
                font-weight: 800;
            }
            .sub_title{
                color: #000;
                font-weight: 900;
            }
            &:last-child{
                margin-right: 0;
            }
        }
    }
`