import {useState } from 'react';
import HouseList from './House3DList';
import houseList3 from '../../../assets/api/houseLise3';
import HouseArray from './House3DArray';
import { HouseMain3DWrap } from './house3Dcss';
import { Outlet } from 'react-router-dom';
import House3Dtop from './House3Dtop';

const House3DMain = () => {
    const [data , setData]=useState(houseList3)



    
    const cp2    = (value) => {
        let uData;
        if (value === 'cashdown' || value === 'cashup') {
            uData = houseList3.filter(item => 
                (value === 'cashdown' ? item.cash < 1000000 : item.cash >= 1000000)).sort((a, b) => a.cash - b.cash);
            } else {
                uData = [...houseList3].sort((a, b) => a[value] < b[value] ? -1 : 1);
        }
        setData([...uData]);
    }
/////////////////////////////////////////////////////////////////////
    const cp1 = (value) => {
        let uData;
        if (value === 'all') {
            uData = [...houseList3].sort((a, b) => a.size - b.size);
        } else {
            uData = houseList3.filter(item => item.size === parseInt(value));
        }
        setData([...uData]);
    }
//////////////////////////////////////////////////////////////////////

    const cp = (value) =>{
        setData([...houseList3].sort((a, b) => a[value] < b[value] ? 1 : -1));
    }
//////////////////////////////////////////////////////////////////////

const cp3 = (value) => {           
    let uData;
    if (value === 'all') {
        uData = [...houseList3].sort((a, b) => a.housewhat - b.housewhat);
    } else {
        uData = houseList3.filter(item => item.housewhat === value);
    }
    setData([...uData]);
}
//////////////////////////////////////////////////////////////////////
const cp4 = (value) => {           
    let uData;
    if (value === 'all') {
        uData = [...houseList3].sort((a, b) => a.family - b.family);
    } else {
        uData = houseList3.filter(item => item.family === value);
    }
    setData([...uData]);
}
    
    
    

    return (
        <HouseMain3DWrap>
            <House3Dtop/>
            <HouseArray cp={cp} cp1={cp1} cp2={cp2} cp3={cp3} cp4={cp4}/>
            <em>전체 915</em>
            <Outlet />
            <HouseList data={data}  />
        </HouseMain3DWrap>
    );
};

export default House3DMain;