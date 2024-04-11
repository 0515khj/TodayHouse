import React from 'react';
import { Menu, NavGnb } from '../../styled/Style';
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { onCumu, onMove, onShop } from '../../store/modules/MenuSilice';

const NavBar = () => {
    const dispatch = useDispatch()
    return (
        <NavGnb>
            <Menu>
                <li><Link to={'/home'} onMouseOver={()=>dispatch(onCumu())} >커뮤니티</Link></li>
                <li><Link to={'/shopping'} onMouseOver={()=>dispatch(onShop())} >쇼핑</Link></li>
            </Menu>
        </NavGnb>
    );
};

export default NavBar;