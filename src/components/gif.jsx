import React from 'react';

class Gif extends React.PureComponent {
    render () {
        const { id } = this.props;
        const src = `https://media1.giphy.com/media/${id}/200.gif`;
        return (
            <img src={src} alt="gif" className="gif" />
        );
    }
}

export default Gif;
