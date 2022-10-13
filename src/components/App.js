import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import Videolist from './VideoList';
import VideoDetail from './VideoDetail';
import './VideoItem.css';
import useVideos from '../hooks/useVideos';


const App = () => {

    // USING CUSTOM HOOKS

    // const [selectedVideo, setSelectedVideo] = useState(null);
    // const [videos, search] = useVideos('Mount Everest');

    // useEffect(() => {
    //     setSelectedVideo(videos[0]);
    // }, [videos])



    // NORMAL

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const search = async (term) => {
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
        search('Mount Everest')
    }, [])

    return (
        <div className='ui-container'>
            <SearchBar onFormSubmit={search} />
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