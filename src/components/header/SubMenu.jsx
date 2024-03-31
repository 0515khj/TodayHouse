import React from 'react';
import { SubMenuList } from '../../styled/Style';
import { cumunity,shopping,Move } from '../../assets/api/menudata';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SubMenu = () => {
    const {cumu,shop,move} = useSelector(state => state.menu)
    return (
        <SubMenuList>
            <ul className='inner'>
                {cumu?cumunity.map(item=><li key={item.id}><Link to={`/community/${item.url}`}>{item.txt}</Link></li>):null}
                {shop?shopping.map(item=><li key={item.id}><Link to={`/shopping/${item.url}`}>{item.txt}</Link></li>):null}
            </ul>
        </SubMenuList>
    );
};

export default SubMenu;