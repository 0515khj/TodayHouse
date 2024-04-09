import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onMain } from '../store/modules/MenuSilice';


const Layout = () => {
    const dispatch = useDispatch()
    return (
        <div className='wrap'>
            <Header />
            <div onMouseEnter={()=>dispatch(onMain())} style={{marginTop:'160px'}}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;