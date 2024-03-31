import styled from "styled-components";

export const BestDealWarp = styled.div`
    width: 1400px;
    margin-bottom: 20px;
    .title{
        font-weight: 700;
        font-size: 20px;
        padding-left: 15px;
    }
    div{
        .list{
            margin-left: 10px;
            display: flex;
            height: 50px;
            width: 100%;
            li{
                width: auto;
                border-radius: 25px;
                height: 30px;
                padding:  0 10px;
                margin: 5px;
                background: #1111;
                font-weight: 600;
                font-size: 15px;
                text-align: center;
                vertical-align: middle;
                padding-top: 3px;
                cursor: pointer;
                &.on{
                    background-color: #54d1ff;
                    color: white;
                    &:hover{
                        background-color: #54AABF;
                    }
                }
                &:hover{
                    background-color: #ccc;
                }

            }

        }
        .item{
            margin:0 15px;
            display: block;
            overflow: hidden;
            img{
                width: 450px;
                height: 450px;
                overflow: hidden;
                transition: 0.5ms;
                border-radius: 5px;
                &:hover{
                    transform: scale(1.02);
                }
            }
            .brand{
                color: #939393;
                font-weight: 600;
                font-size: 15px;
            }
            .title{
                padding-left: 0;
                font-size: 14px;
                font-weight: 500;
            }
            .sale{
                color: #54d1ff;
                font-weight: 700;
                font-size: 20px;
                span{ color: #000;}
            }
            .user{
                display: flex;
                .faci{
                    font-weight: 600;
                    font-size: 14px;
                    margin-right: 8px;
                }
                .review{
                    font-weight: 600;
                    font-size: 14px;
                    color: #939393;
                }
            }
            .bool{
                display: flex;
                padding-bottom: 5px;
                .free{
                    background-color: #939393;
                    width: 80px;
                    border-radius: 8px;
                    text-align: center;
                    margin-right: 5px;
                }
                .special{
                    background-color: #e66b6b;
                    border-radius: 8px;
                    text-align: center;
                    width: 40px;
                    color: #fff;
                }
            }

        }
    }

`
