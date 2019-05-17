import React from 'react';
import Gif from './gif';

const GifList = ({ gifs }) => {
    return (
        <div className="gif-list">
            { gifs.map(({ id }) => <Gif id={id} key={id} />)}
        </div>
    );
};

export default GifList;
