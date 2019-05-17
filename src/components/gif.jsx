import React from 'react';

const Gif = ({ id }) => {
    const src = `https://media1.giphy.com/media/${id}/200.gif`;
    return (
        <img src={src} alt="gif" className="gif" />
    );
};

export default Gif;
