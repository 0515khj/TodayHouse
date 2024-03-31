import styled from "styled-components";

export const HouseSubWrap = styled.div`
        width:100%;
        margin:auto;
        
        .top {
        img {
            width:100%;
            height:580px;
        }
    }
    `




export const HouseSubhdWrap = styled.div`
    position: relative;

    .inner { width:790px;
        h2 {text-align:center; margin-top:60px; font-size:33px; font-weight:700; margin-bottom:40px; }
        

        .top2 { 
                display:flex; 
            img{ width:50px; height: 50px; border-radius:50%; }
            em { 
                padding-left:10px ;
                display:block;
                width: 72px; 
                word-wrap: break-word;}
            button { position:absolute; right:0;
                    background:#64B5F6; border:none; color:#fff;
                    font-weight:600; height:40px; width:80px;
                    border-radius:5px;  
                    cursor: pointer;  
            }
        }
    }

    .innerbox {
        margin-top:30px ;
        border-radius:5px;
        margin-bottom:50px;
        border: none;
        background:#f5f5f5;
        position: relative;


        .box1{
         display:flex;
         height:100px;
         justify-content:space-between;
         padding-right:70px;
         padding-left:70px ;
         border-bottom: 1px solid #dddddd;
         line-height:100px;
                li{
                    margin:0;
                    font-size:20px;
                    i {font-size:30px; padding-right:10px;} 
                }
        }
        .box2 {
            padding-top:20px;
            width:700px;
            display:flex;
            flex-wrap:wrap;
            height:100px;
            padding-right:50px;
         padding-left:50px ;
         li{
            padding-right:20px;
            span { color:#999}
         }
        }
    }

    .innerbox2{
        border-radius:5px;
    margin-bottom:50px;
    border: none;
    background:#f5f5f5;
    padding-left:40px;

    h3{ color:#2196F3; font-weight:700; padding-top:15px;}
        ul{
            li{
                padding:10px;
            }
        }
    }

    .innerbox3 {
        img {width:100%; height:600px;}
        p{font-size:18px; }
        .box3p {margin-top:50px;}
        .box3p1 {margin-bottom:30px;}
        .box3p2 {margin-bottom:50px;}
    }

`
export const HouseBannerWrap = styled.div`
    
.banner{
    .khj {
        position: fixed;
        right: 150px;
        bottom: 300px;
        width: 60px;

        em { display:block; text-align:center; margin-bottom:30px;  font-size:20px; color:#999; /* margin-left:14px; */ }
    }

    p {
        /* margin-bottom: 50px; */
        line-height: 2.1;
        font-size: 30px;
        height: 60px;
        text-align: center;
        background: #fff;
        border: 1px solid #dcdcdc;
        border-radius: 50%;
    }
}
`




export const HouseCenterWrap =styled.div`
        .inner{ width:790px;
            h2{
                font-size:30px;
                text-align:left;
                margin-bottom:10px;
                .icon{
                    color:yellow;
                    padding-right:10px;
                    font-size:40px;}
            }
            .bigsub {
                position: relative;
                .biginner {
                    img{width:100%; height:600px;}
                    .btn1 {
                        position:absolute; right:0;
                    }
                }
            }
            .smalssub {
                display:flex; justify-content:space-between;
                img{width:150px; height:150px; border-radius:30%;}
            }
            .smalsub{cursor: pointer;}


       
        .popup {
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            background-color:white;
            padding:20px;
            display:none;
            

        }
        .popup.show {
            display:block;
            display:flex;
            justify-content:space-between;
            .showinner{
                margin-right:10px;
            }
           
            img{width:150px; height:100px; }
        }
    }

`

export const HouseCenterWrap2 =styled.div`
            margin-top:50px; 
            .inner{ width:790px;
            h2{font-size:30px;
                text-align:left;
                
                i{color:yellow;
                    font-size:40px;}
            }
            .bigsub {
                position: relative;
                .biginner {
                    img{width:100%; height:600px;}
                    .btn1 {
                        position:absolute; right:0;
                    }
                }
            }
            .smalssub {
                display:flex; justify-content:space-between;
                
                img{width:150px; height:150px; border-radius:30%;}
            }
            .smalsub{cursor: pointer;}


       
        .popup {
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            background-color:white;
            padding:20px;
            display:none;
            

        }
        .popup.show {
            display:block;
            display:flex;
            justify-content:space-between;
            .showinner{
                margin-right:10px;
            }
           
            img{width:150px; height:100px; }
        }
    }




`
export const HouseCenter3Wrap =styled.div`
        .inner{
                width:790px;
                margin-top:50px;
                .typepic{
                    font-size:18px;
                    img{width:100%;}
                    strong{display:block;  margin-top:30px;}
                    em{display:block;  margin-top:30px;}
                }
            
                .nav {
                    h2{font-size:30px; font-weight:600; margin-top:50px; margin-bottom:20px;}
                    img{width:790px; height:600px; margin-bottom:20px;}
                    p{padding-bottom:5px;}
                }
                .nav1 {
                    margin-top:50px;
                    img{width: 790px; height:600px; margin-bottom:20px;}
                    p{padding-bottom:5px;}
                }
                .nav2 {
                    margin-top:50px;
                    img{width: 790px; height:600px; margin-bottom:20px;}
                    p{padding-bottom:5px;}
                }
                .ft {
                    margin-top:50px;
                    p{color:#999; text-align:center; }
                    .ftp{ border-top: 2px solid #999;padding-top:20px ;}
                }
                .ft1 {
                    margin-top:60px;
                    p{color:#888;
                        padding-bottom:20px;
                        border-bottom: 1px solid #dcdcdc;}
                }
                .fttop { 

                    border-bottom: 1px solid #dcdcdc;
                    padding-bottom:50px;
                    margin-top:50px;
                display:flex; 
            img{ width:50px; height: 50px; border-radius:50%; }
            em { 
                padding-left:10px ;
                display:block;
                width: 72px; 
                word-wrap: break-word;}
            button { position:absolute; right:0;
                    background:#64B5F6; border:none; color:#fff;
                    font-weight:600; height:40px; width:80px;
                    border-radius:5px;  
                    cursor: pointer;  
            }
        }
        }


`



