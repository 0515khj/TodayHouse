import {useState } from 'react';
import HouseList from './HousepicList';
import houseList2 from '../../../assets/api/houseLise2';
import HouseArray from './HousepicArray';
import {HousepicMainWrap } from './housepiccss';
import { Outlet } from 'react-router-dom';

const HousepicMain = () => {
    const [data , setData]=useState(houseList2)



    
    const cp2    = (value) => {
        let uData;
        if (value === 'cashdown' || value === 'cashup') {
            uData = houseList2.filter(item => 
                (value === 'cashdown' ? item.cash < 1000000 : item.cash >= 1000000)).sort((a, b) => a.cash - b.cash);
            } else {
                uData = [...houseList2].sort((a, b) => a[value] < b[value] ? -1 : 1);
        }
        setData([...uData]);
    }
/////////////////////////////////////////////////////////////////////
    const cp1 = (value) => {
        let uData;
        if (value === 'all') {
            uData = [...houseList2].sort((a, b) => a.size - b.size);
        } else {
            uData = houseList2.filter(item => item.size === parseInt(value));
        }
        setData([...uData]);
    }
//////////////////////////////////////////////////////////////////////

    const cp = (value) =>{
        setData([...houseList2].sort((a, b) => a[value] < b[value] ? 1 : -1));
    }
//////////////////////////////////////////////////////////////////////

const cp3 = (value) => {           
    let uData;
    if (value === 'all') {
        uData = [...houseList2].sort((a, b) => a.housewhat - b.housewhat);
    } else {
        uData = houseList2.filter(item => item.housewhat === value);
    }
    setData([...uData]);
}
//////////////////////////////////////////////////////////////////////
const cp4 = (value) => {           
    let uData;
    if (value === 'all') {
        uData = [...houseList2].sort((a, b) => a.family - b.family);
    } else {
        uData = houseList2.filter(item => item.family === value);
    }
    setData([...uData]);
}
    
    
    

    return (
        <HousepicMainWrap>
            <HouseArray cp={cp} cp1={cp1} cp2={cp2} cp3={cp3} cp4={cp4}/>
            <Outlet />
            <HouseList data={data}  />
        </HousepicMainWrap>
    );
};

export default HousepicMain;