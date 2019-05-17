import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            gifs: [],
            selectedGifId: "10kxE34bJPaUO4"
        };

        this.search("Pizza");
    }

    search = (query) => {
        // My API key
        giphy('jU6ab4lFD2HaKsegBe5HFVT4v1Yc54tx').search({
            q: query,
            rating: 'g',
            limit: 15
        }, (err, res) => {
            this.setState({
                gifs: res.data
            });
        });
    }

    render () {
        const { gifs, selectedGifId } = this.state;
        return (
            <div>
                <div className="left-scene">
                    <SearchBar searchFunction={this.search} />
                    <div className="selected-gif">
                        <Gif id={selectedGifId} />
                    </div>
                </div>
                <div className="right-scene">
                    <GifList gifs={gifs} />
                </div>
            </div>
        );
    }
}

export default App;
