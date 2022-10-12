import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div onClick={() => onVideoSelect(video)} className='video-item item'>
            <img
                className='ui image thum-image'
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div className='content'>
                <h5 className='header'>{video.snippet.title}</h5>
            </div>
        </div>
    );
}

export default VideoItem;