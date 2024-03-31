import React, { useState } from 'react';
import { BestDealWarp } from './BestDealStyle';
import { BD_Category } from '../../../../../assets/api/categorydata';
import {shopping} from '../../../../../assets/api/BestShopData'
import BestDealItem from './BestDealItem';

const BestDeal = () => {
    const [data,setData] = useState(shopping.filter(item=> item.cate==='best'))
    const [category,setCate] =useState(BD_Category)
    const Onsolt = (value) =>{
        setCate(category.map(item=>item.value === value?{...item,ischk:true}:{...item,ischk:false}))
        setData(shopping.filter(item=>item.cate === value))
    }

    return (
        <BestDealWarp className='inner'>
            <h3 className='title'>베스트</h3>
            <div >
                <ul className='list'>
                    {category.map(item=><li key={item.id} className={item.ischk?'on':null} onClick={()=>Onsolt(item.value)}>{item.txt}</li>)}
                </ul>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    {data.map(item=><BestDealItem item={item} key={item.id}/>)}
                </div>
            </div>
        </BestDealWarp>
    );
};

export default BestDeal;