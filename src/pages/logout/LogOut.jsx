import React from 'react';
import { LogOutWrap, ProfileBox } from './LoginOutStyle';
import { HouseButton } from '../../styled/Style';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/modules/authSlice';

const LogOut = () => {
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogout = () => {
        navigate('/shopping')
        dispatch(logout())
    }
    return (
        <LogOutWrap>
            <div className='inner'>
                <ProfileBox>
                    <img src="/images/commentsmile.png" alt="" />
                    <span>{user.email}</span>
                    <strong>{user.username}님 로그인되셨습니다.</strong>
                    <em></em>
                    <HouseButton onClick={onLogout}>로그아웃</HouseButton>
                </ProfileBox>
              
            </div>
        </LogOutWrap>
    );
};

export default LogOut;