import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActionArea } from '@mui/material';
import { Component } from 'react';
import Cards from './Cards';
import axios from 'axios';

const RestaurantAd = () => {

    const [offers, setOffers] = useState([]);

    // @ts-ignore
    useEffect(() => {
        setTimeout(async () => {
            const result = await axios('https://ft7mpjhh6c.execute-api.us-east-2.amazonaws.com/default/get-categories');
            setOffers(result.data.body);
        }, 1000)
    }, []);

    return (
        <div className="w-[60%] m-auto">
            <h1 className="text-left px-10 pt-10 font-bold text-5xl">Oferte</h1>
            <div className="relative p-10 grid grid-cols-3 gap-6">
                {offers.map(item => <Cards className="" data={item} />)}
            </div>
        </div>
    );
}

export default RestaurantAd;
