import React from 'react';
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

class RestaurantAd extends Component {
    // state = {
    //     activeSlideIndex: 0,
    // };

    // setActiveSlideIndex = (newActiveSlideIndex: any) => {
    //     this.setState({
    //         activeSlideIndex: newActiveSlideIndex,
    //     });
    // };

    render() {
        return (
            <Carousel
                // @ts-ignore
                // activeSlideIndex={this.state.activeSlideIndex}
                // onRequestChange={this.setActiveSlideIndex}
                itemsToShow={10}
                itemsToScroll={3}
                updateOnItemClick
                containerProps={{
                    style: {
                        width: "300px",
                        justifyContent: "space-between"
                    }
                }}
                speed={400}
            >
                <div style={{ width: 300, height: 300, display: 'inline-block', background: 'red' }}>slide 0</div>
                <div style={{ width: 300, height: 300, display: 'inline-block', background: 'red' }}>slide 1</div>
                <div style={{ width: 300, height: 300, display: 'inline-block', background: 'red' }}>slide 2</div>
                <div style={{ width: 300, height: 300, display: 'inline-block', background: 'red' }}>slide 3</div>
                <div style={{ width: 300, height: 300, display: 'inline-block', background: 'red' }}>slide 4</div>
                <div style={{ width: 300, height: 300, display: 'inline-block', background: 'red' }}>slide 5</div>
                <div style={{ width: 300, height: 300, display: 'inline-block', background: 'red' }}>slide 6</div>
                <div style={{ width: 300, height: 300, display: 'inline-block', background: 'red' }}>slide 7</div>
                <div style={{ width: 300, height: 300, display: 'inline-block', background: 'red' }}>slide 8</div>
                <div style={{ width: 300, height: 300, display: 'inline-block', background: 'red' }}>slide 9</div>
            </Carousel>
        );
    }
}

export default RestaurantAd;
