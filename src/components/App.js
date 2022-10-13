import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import Videolist from './VideoList';
import VideoDetail from './VideoDetail';
import './VideoItem.css';


const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response.data.items)
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    useEffect(() => {
        onTermSubmit('himachal')
    }, [])



    return (
        <div className='ui container'>
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className='grid-container'>
                <div className=''>
                    <VideoDetail video={selectedVideo} />
                </div>
                <div className=''>
                    <Videolist
                        videos={videos}
                        onVideoSelect={(video) => setSelectedVideo(video)}
                    />
                </div>
            </div>
        </div >
    );
}

export default App;