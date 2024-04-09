import React, { useEffect, useState } from 'react';
import { InfiniteBoxStyle } from './InfiniteBoxStyle';
import ProductCard from '../../../../../components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../../../store/modules/productSlice';
import ClipLoader from 'react-spinners/ClipLoader'
import shoppingProducts from '../../../../../assets/api/shoppingProducts';

const InfiniteBox = () => {
    let {products} = useSelector(state => state.product)
    
    const dispatch = useDispatch()
    const [pro , setPro]=useState(shoppingProducts)
    const [product, setProduct] = useState(products);    
    const [productData, setproductData] = useState([]);    
    const [page, setPage] = useState( 1 );
    const [pageloading, setLoading] = useState(false);
    let postsPerPage =  3;

    useEffect(()=>{
        dispatch(getProduct())
        },[])

    useEffect(()=>{
    setProduct(products)
        },[products])

    useEffect(() => {
        const lastPost = page * postsPerPage      
        const currentPosts = product.slice( 0 , lastPost )

        setTimeout(() => { 
            setproductData( currentPosts )
             setLoading(false);
        }, 1500);
    }, [page]);

    const scrollToEnd = () => {
        if(productData.length === 15) return
        setLoading(true);
        setPage( page => page + 1);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pageloading]);


    const handleScroll = () => {
        if(productData.length === 15) return
       if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
           if(!pageloading) {scrollToEnd()}
        }         
        };


        return (
        <InfiniteBoxStyle>
            <h2>전체{products.length}개</h2>
            <ul>
                {/* {productData.map(item =><ProductCard key={item.id} item={item}/>)} */}
                {pro.map(item =><ProductCard key={item.id} item={item}/>)}
                {pageloading && <ClipLoader color="#54d1ff" size={50} cssOverride={{margin:'50px auto 50px auto',display:'block'}}/>}
            </ul>
        </InfiniteBoxStyle>
    );
};

export default InfiniteBox;