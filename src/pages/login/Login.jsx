import React, { useRef, useState } from 'react';
import { EmailInput, LoginWrap, SnsLogoBox } from './LoginStyle';
import Logo from '/images/LoginLogo.png'
import NaverLogo from '/images/naverLogo.png'
import KakaoLogo from '/images/kakaoLogo.png'
import facebookLogo from '/images/googleLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/modules/authSlice';

const Login = () => {
    const [user, setUser] = useState({
        email:'', password:''
    })
    const emailRef = useRef()
    const {email,password} = user;
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        if(!email || !password) return
            dispatch(login(user))
            navigate('/shopping')
        setUser({
            email:'',
            password:''
        })
    }

    const onInput = (e) => {
        const {name,value} = e.target 
        setUser({...user,[name]:value})
    }

    return (
        <LoginWrap>
            <div className='inner'>
                <h1><Link to={`/community/home`}><img src={Logo} alt="" /></Link></h1>
            <form onSubmit={onSubmit}>
                <EmailInput>
                    <input type="email" placeholder="ID : hello@naver.com" name='email' value={email} onChange={onInput}/>
                </EmailInput>                
                <p>  
                    <input type="password" placeholder="PW : hi1234" name='password' value={password} onChange={onInput}/>
                </p>
                <p><button type="submit">로그인</button></p>
            </form>
            <div>
            <span>회원가입</span>
            </div>
            <em>SNS계정으로 간편 로그인/회원가입</em>
            <SnsLogoBox>
                <li><img src={facebookLogo}/></li>
                <li><img src={NaverLogo} alt="" /></li>
                <li><img src={KakaoLogo} alt="" /></li>
            </SnsLogoBox>
            <div style={{color:'gray'}}>로그인에 문제가 있으신가요?</div>
                   </div>
        </LoginWrap>
    );
};

export default Login;