import React, { useEffect, useState } from 'react';
import { BestMainStyle } from './BestMainStyle';
import BestCon from './BestCon/BestCon';
import BestMenuTab from './BestMenu/BestMenuTab';
import shoppingProducts from '../../../assets/api/shoppingProducts';
import ClipLoader from 'react-spinners/ClipLoader'

const BestMain = () => {
    const [product, setProduct] = useState(shoppingProducts);    
    const [productData, setproductData] = useState([]);    
    const [page, setPage] = useState( 1 );
    const [loading, setLoading] = useState(false);
    let [bestState, setBestState] = useState('');

    let best = (bestprops) => {
        if(loading) return
        setBestState(bestprops)
    }
    useEffect(()=>{
    setproductData(shoppingProducts.filter(item => item.best === bestState))
    if(bestState === 'allproduct'){ setproductData(shoppingProducts)}
    },[bestState])

    let postsPerPage =  8 //로딩시ㅣ 보여질개수  
    
    useEffect(() => {
        const lastPost = page * postsPerPage      
        const currentPosts = product.slice( 0 , lastPost )

        setTimeout(() => { 
            setproductData( currentPosts )
             setLoading(false);
        }, 1500);
    }, [page]);

    const scrollToEnd = () => {
        if(productData.length === shoppingProducts.length) return
        setLoading(true);
        setPage( page => page + 1);
    }


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading]);


    const handleScroll = () => {
       if(productData.length === shoppingProducts.length) return
       if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
        ) {
           if(!loading) {
            scrollToEnd() 
           }
        }         
    };
   
    return (
        <div className='inner'>
        <BestMenuTab best={best} bestState={bestState}/>
        <BestMainStyle>
            <BestCon productData={productData} bestState={bestState}/>
            {loading && <ClipLoader color="#54d1ff" size={50} cssOverride={{margin:'50px auto 50px auto',display:'block'}}/>}
        </BestMainStyle>
     

        </div>
    );
};

export default BestMain;