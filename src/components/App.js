import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import Videolist from './VideoList';
import VideoDetail from './VideoDetail';
import './VideoItem.css';


class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onTermSubmit('himachal')
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response.data.items)
        this.setState({ videos: response.data.items });
        this.setState({ selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className='grid-container'>
                    <div className=''>
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className=''>
                        <Videolist videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                    </div>
                </div>
            </div >
        )
    }
}

export default App;