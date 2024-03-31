import { useState } from "react";
import { HouseArrayWrap } from "./housecss";


const HouseArray = ({cp,cp1,cp2,cp3,cp4}) => {

    

    return (
        <HouseArrayWrap>

             <select onChange={(e) => cp(e.target.value)}>
                <option value="">정렬</option>
                <option value="title">이름순</option>
                <option value="new">최신순</option>
                <option value="good">인기순</option>
            </select>

            <select onChange={(e) =>  cp1(e.target.value)}>
                <option value="all">평수</option>
                <option value="10">10평대</option>
                <option value="20">20평대</option>
                <option value="30">30평대</option>
                <option value="40">40평대</option>
                <option value="50">50평대</option>
            </select>

            <select onChange={(e) => cp2(e.target.value)}>
                <option value="cashall">예산</option>
                <option value="cashdown">백만원미만</option>
                <option value="cashup">백만원이상</option>
            </select>

            <select onChange={(e) =>  cp3(e.target.value)}>
                <option value="all">주거형태</option>
                <option value="오피스텔">오피스텔</option>
                <option value="단독주택">단독주택</option>
                <option value="사무공간">사무공간</option>
            </select> 


            <select onChange={(e) => cp4(e.target.value)}>
                <option value="all">가족형태</option>
                <option value="single">싱글라이프</option>
                <option value="hot">신혼부부</option>
                <option value="baby">아기있는집</option>
            </select>
            
        </HouseArrayWrap>
    );
};

export default HouseArray;