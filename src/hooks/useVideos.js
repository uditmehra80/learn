import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearch) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearch)
    }, [defaultSearch])

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        console.log(response.data.items)
        setVideos(response.data.items);
    }

    return [videos, search];
};

export default useVideos;