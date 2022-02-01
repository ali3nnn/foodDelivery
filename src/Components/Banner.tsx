import { TextField } from '@mui/material';
import React from 'react';
import './Banner.scss';

const Banner = (props: any) => {
    return (
        <div className="banner-wrapper relative block bg-gradient-to-r from-cyan-500 to-blue-500" style={{
            ...(props.data.src && {
                backgroundImage: `url(${props.data.src})`,
            }),
        }}>
            <div className="banner-inner absolute block bottom-10 top-10 left-0 right-0 grid grid-cols-1 place-items-center">
                <div className="restaurant-name">
                    <p className="bg-white opacity-95 px-10 py-5 text-2xl rounded-lg">{props.data.restaurant}</p>
                </div>
                <div className="search-field opacity-95">
                    <input placeholder="Cauta" className="bg-white rounded-lg border-white px-5 py-2" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
