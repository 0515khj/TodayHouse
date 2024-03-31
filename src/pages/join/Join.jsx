import React, { useRef, useState } from 'react';
import { JoinWrap,FormStyle } from './JoinStyle';
import { SnsLogoBox } from '../login/LoginStyle';
import NaverLogo from '/images/naverLogo.png'
import KakaoLogo from '/images/kakaoLogo.png'
import facebookLogo from '/images/googleLogo.png'
import { HouseButton } from '../../styled/Style';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singup } from '../../store/modules/authSlice';

const Join = () => {
    const [user, setUser] = useState({
        username:'',
        email:'',
        password:'',
    })
    const {username ,email,password} = user
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onInput = (e) => {
        const {name , value} = e.target 
        setUser({...user,[name]:value})
    }
    const onSubmit = e => {
        e.preventDefault()
        if(!username || !password) return
        dispatch(singup(user))
        setUser({username:'',email:'',password:''})
        navigate('/shopping')
    }
    
    return (
        <JoinWrap>
            <div className='inner'>
            <h2>회원가입</h2>
            <SnsLogoBox>
                <li><img src={facebookLogo}/></li>
                <li><img src={NaverLogo} alt="" /></li>
                <li><img src={KakaoLogo} alt="" /></li>
            </SnsLogoBox>
           <form onSubmit={onSubmit}>
           <FormStyle>
                <label htmlFor='email'>이메일</label>
                <em>이메일을 입력해주세요.</em>
                <input type="email" placeholder='이메일' onChange={onInput} name='email' value={email}/>
            </FormStyle>
                <FormStyle>
                <label htmlFor='password'>비밀번호</label>
                <em>비밀번호를 입력해주세요.</em>
                <input type="password" placeholder='비밀번호' onChange={onInput} name='password' value={password}/>
                </FormStyle>
                <FormStyle>
                <label htmlFor='text'>닉네임</label>
                <em>다른 유저와 겹치지 않도록 입력해주세요.</em>
                <input type="text" placeholder='별명'onChange={onInput} name='username' value={username}/>
                </FormStyle>
                <HouseButton type='submit' className='joinSubmit'>회원가입하기</HouseButton>
            </form>
            <span className='already'>이미 아이디가 있으신가요? 로그인</span>
            </div>
        </JoinWrap>
    );
};

export default Join;