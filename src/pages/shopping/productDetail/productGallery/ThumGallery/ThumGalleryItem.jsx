import React from 'react';

const ThumGalleryItem = ({item}) => {
    const {subimg} = item
    return (
        <li>
            <img src={subimg} alt="" />
        </li>
    );
};

export default ThumGalleryItem;