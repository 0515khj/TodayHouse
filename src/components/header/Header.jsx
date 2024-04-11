import { Link } from 'react-router-dom';
import { HeaderWrap, HouseButton } from '../../styled/Style';
import NavBar from './NavBar';
import logo from '/images/OhouseLogo.png'
import { useSelector } from 'react-redux';
import SubMenu from './SubMenu';

const Header = () => {
    const {authed} = useSelector(state => state.auth)
    return (
        <>
          <HeaderWrap>
            <div className='inner'>
                <div>
                    <Link to={'/home'}>
                <h1><img src={logo} alt="" /></h1>
                </Link>
                <NavBar/>
                </div>
                <p>
                    {authed ? <HouseButton className='login'><Link to={'/logout'}>로그아웃</Link></HouseButton> : <HouseButton className='login'><Link to={'/login'}>로그인</Link></HouseButton>} 
                    <HouseButton className='join'><Link to={'/join'}>회원가입</Link></HouseButton>
                </p>
            </div>
        </HeaderWrap>
        <SubMenu />
        </>
    );
};

export default Header;