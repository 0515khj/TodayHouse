import React from 'react';
import { ThumGalleryStyle } from '../ProductGalleryBoxStyle';
import ThumGalleryItem from './ThumGalleryItem';

const ThumGalleryBox = ({gallery}) => {
    return (
        <ThumGalleryStyle>
            <ul>
                {gallery.map(item => <ThumGalleryItem item={item} key={item.id}/>)}
            </ul>
        </ThumGalleryStyle>
    );
};

export default ThumGalleryBox;