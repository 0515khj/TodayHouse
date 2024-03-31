import React from 'react';
import { FooterWrap } from '../../styled/Style';
import footimg1 from '../../../public/images/ft1.png'
import footimg2 from '../../../public/images/ft2.png'
import footimg3 from '../../../public/images/ft3.png'
import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaSquareFacebook } from "react-icons/fa6";
import { DiApple } from "react-icons/di";
import { DiBower } from "react-icons/di";
import { AiOutlineAndroid } from "react-icons/ai";
import { AiOutlineSlack } from "react-icons/ai";

const Footer = () => {
    return (
        <FooterWrap>
            <div className='inner'>
                <ul className='ftall'>

                    <li className='con1'>
                    <div className="con1inner1">
                        <h2>고객센터</h2><p>〉</p>
                        </div>
                        <div className="con1inner">
                        <h3>1670-0876</h3><p>09:00~18:00</p>
                        </div>
                        <ul className='con1ul'>
                            <li>평일:전체 문의 상담</li>
                            <li>토요일,공휴일:오늘의집 직접배송,이사/시공 문의 상담</li>
                            <li>일요일:휴무</li>
                        </ul>
                        <p className='ptn1'>카톡상담(평일 09:00~18:00)</p>
                        <p className='ptn2'>
                            <p>이메일 문의</p></p>
                    </li>
                    
                    <li className='con2'>
                        <p className='con2p'>회사소개</p>
                        <p>입점신청</p>
                        <p className='con2p'>채용정보</p>
                        <p>제휴/광고 문의</p>
                        <p className='con2p'>이용약관</p>
                        <p>시공파트너 안내</p>
                        <p className='con3p'>개인정보 처리방침</p>
                        <p>상품광고 소개</p>
                        <p className='con2p'>공지사항</p>
                        <p >고객의 소리</p>
                        <p>안전거래센터</p>
                    </li>
                    <li className='con3'>
                        <p>|(주)버킷플레이스|대표이사 이승재|서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층|contact@bucketplace.net</p>
                        <p>사업자등록번호 119-86-91245 사업자정보확인|통신판매업신고번호 제2018-서울서초-0580호</p>
                        <p>고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다. 서비스가입사실확인</p>
                        <p className='ftimg'>
                            <span className='ftimg1'>
                                <img src={footimg1} alt="" />
                                <em>오늘의집 서비스운영  2021.09.08 ~ 2024.09.07 </em>
                            </span>
                            <span className='ftimg2'><img src={footimg2} alt="" /></span>
                            <span className='ftimg3'><img src={footimg3} alt="" /></span>
                        </p>
                        <p>(주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단, (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을 부담합니다.</p>
                    
                        <div className="icons">
                            <p> <FaYoutube /> </p>
                            <p> <GrInstagram  /> </p>
                            <p> <FaSquareFacebook  /> </p>
                            <p> <DiApple  /> </p>
                            <p> <DiBower   /> </p>
                            <p> <AiOutlineAndroid   /> </p>
                            <p> <AiOutlineSlack   /> </p>
                        </div>
                    
                    </li>
                </ul>
            </div>
        </FooterWrap>
    );
};

export default Footer;