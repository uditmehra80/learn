import React from 'react';

const VideoDetail = ({ video }) => {

    if (!video) {
        return <h5 className='header'>Loading..</h5>;
    }

    const videosrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className=''>
            <div className='ui embed'>
                <iframe title='video player' src={videosrc}></iframe>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p className="description">{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;