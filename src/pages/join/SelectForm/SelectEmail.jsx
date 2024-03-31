import React from 'react';
import { SelectBox, SelectEmailStyle } from './SelectEmailStyle';
import { HouseButton } from '../../../styled/Style';
import { FormStyle } from '../JoinStyle';

const SelectEmail = () => {
    return (
        <SelectEmailStyle>
             <SelectBox>
             <select>
                <option value="선택">선택해주세요</option>
                <option value="naver">naver.com</option>
                <option value="hanmail">hanmail.net</option>
                <option value="daum">daum.net</option>
                <option value="gmail">gmail.com</option>
                <option value="nate">nate.com</option>
            </select>
            </SelectBox>
        </SelectEmailStyle>
    );
};

export default SelectEmail;