import styled from 'styled-components'


export const HousepicMainWrap = styled.div`
    width: 1400px;
    margin:auto;
    em {display:block; margin-bottom:10px;}
`

export const HousepiclistWrap = styled.div`
ul{ 
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    
    li {

       
    }
}
`

export const HousepicitemWrap = styled.div`

  ul{ 
    margin-bottom:40px;
    li{ 
        div{    
            overflow:hidden;
            border-radius:10px;
            .toppic{
                img{width: 20px;
                        height:20px;}
            }
            .khj{position: relative;
                img{ z-index:-1;}
                p{color:skyblue; font-weight:700; z-index:1; position:absolute;right:5px;bottom:20px ; }
            }
            .bar{
                display:flex; 
                justify-content:space-between;
                padding:0px 15px 10px;
                
                em{line-height:2; margin-left: 5px;}
                p{
                cursor: pointer;
                font-size:25px;
                 background: none; 
                }



                .bar1{display:flex}
                .bar2{display:flex}
            }
            .hitext{
                width:260px;
                word-wrap: break-word;}
            img{border-radius:10px; 
                overflow:hidden;
                transition:0.2s;
                width: 310px;
                height: 300px;
                margin-bottom:10px;
                &:hover{transform:scale(1.05)}    
            }
            span{ color:#999;}
            .maintop {
                .mainall{}
                .main2 {display:flex;}
                button {cursor: pointer;
                    background:none;
                    border:none;
                    color:skyblue;
                    font-weight:900;
                    font-size:17px;
                    margin-bottom:-10px;
                }
                display:flex;
                p{margin-top:10px;
                    line-height:20px;
                    margin-right: 5px;
                    
                    img{width: 40px;
                        height:40px;
                        border-radius:50%
                    }
                   
                }
                .main3 {
                    width:240px;
                     overflow:hidden;
                     strong{
                        max-width:240px;
                        overflow:hidden;
                        text-overflow:ellipsis;    
                        white-space:nowrap;
                        display:inline-block;
                        vertical-align:middle;
                    }            
                }
            }
           
        }
    }

 } 
`
export const Showpop = styled.div`
            width:200px;
            z-Index:100;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-Color: #3c3c3c;
            border: 1px solid #999;
            border-Radius: 5px;

`
export const Pop = styled.div`
 color:#fff; 
 text-Align: center;
`




export const HousepicArrayWrap = styled.div`
select {margin-right:5px;
        padding-left:5px;
        border-radius:5px;
        margin-top:10px;
        border:1px solid #000; 
        border:none;
        background-color:#e3e3e3; 
        height:30px;
        transition:0.5s;

        margin-bottom:60px;
        
        transition:0.3s;
        &:hover {background: #82B1FF;}
        option{
                background: #e5e5e5;
        }
}
`



