import {useState } from 'react';
import HouseList from './HouseList';
import houseList from '../../../assets/api/houseList';
import HouseArray from './HouseArray';
import { HouseMainWrap } from './housecss';
import { Outlet } from 'react-router-dom';

const HouseMain = () => {
    const [data , setData]=useState(houseList)



    
    const cp2    = (value) => {
        let uData;
        if (value === 'cashdown' || value === 'cashup') {
            uData = houseList.filter(item => 
                (value === 'cashdown' ? item.cash < 1000000 : item.cash >= 1000000)).sort((a, b) => a.cash - b.cash);
            } else {
                uData = [...houseList].sort((a, b) => a[value] < b[value] ? -1 : 1);
        }
        setData([...uData]);
    }
/////////////////////////////////////////////////////////////////////
    const cp1 = (value) => {
        let uData;
        if (value === 'all') {
            uData = [...houseList].sort((a, b) => a.size - b.size);
        } else {
            uData = houseList.filter(item => item.size === parseInt(value));
        }
        setData([...uData]);
    }
//////////////////////////////////////////////////////////////////////

    const cp = (value) =>{
        setData([...houseList].sort((a, b) => a[value] < b[value] ? 1 : -1));
    }
//////////////////////////////////////////////////////////////////////

const cp3 = (value) => {           
    let uData;
    if (value === 'all') {
        uData = [...houseList].sort((a, b) => a.housewhat - b.housewhat);
    } else {
        uData = houseList.filter(item => item.housewhat === value);
    }
    setData([...uData]);
}
//////////////////////////////////////////////////////////////////////
const cp4 = (value) => {           
    let uData;
    if (value === 'all') {
        uData = [...houseList].sort((a, b) => a.family - b.family);
    } else {
        uData = houseList.filter(item => item.family === value);
    }
    setData([...uData]);
}
    
    
    

    return (
        <HouseMainWrap>
            <HouseArray cp={cp} cp1={cp1} cp2={cp2} cp3={cp3} cp4={cp4}/>
            <em>전체 12,555</em>
            <Outlet />
            <HouseList data={data}  />
        </HouseMainWrap>
    );
};

export default HouseMain;