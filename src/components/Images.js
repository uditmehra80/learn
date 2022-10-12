import React, { useState, useEffect } from 'react';
import './img.css';
import axios from 'axios';

function Images(props) {
    const [data, setData] = useState([]);

    const GetData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(function (response) {
                // console.log(response.data);
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        GetData();
    }, []);

    useEffect(() => {
        const Images = document.querySelectorAll(".singleImg");
        if (Images.length > 0) {
            Images.forEach((img) => {
                img.addEventListener('load', () => {
                    const spans = Math.ceil(img.clientHeight / 10) + 1;
                    img.style.gridRowEnd = `span ${spans}`;
                })
            })
        }
    }, [data]);

    return (
        <div className='container-main'>
            {data &&
                data.map((img) => (
                    <>
                        <img key={img.id} className='singleImg' src={img.image} />
                    </>
                ))}
        </div>

    );
}

export default Images;