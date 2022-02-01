import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../assets/logo.png';
import { Routes, Route, Link } from "react-router-dom";
import Restaurant from './Restaurant';
import { Avatar } from '@mui/material';

const hrefReset = {
    "textDecoration": "none",
    color: "white"
}

const headerButtonStyle = {
    color: "white",
}

const headerContainer = {
    "max-width": "500px",
    width: "100%",
    margin: "0 auto"
}

const Header = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <div className="">
                        <img src={logo} width="50" className="" />
                    </div>

                    <div style={headerContainer}>
                        <Link to="/restaurant" style={hrefReset}>
                            <Button variant="text" style={headerButtonStyle} sx={{ flexGrow: 1 }} >
                                Restaurant
                            </Button>
                        </Link>
                        <Link to="/istoric" style={hrefReset}>
                            <Button variant="text" style={headerButtonStyle} sx={{ flexGrow: 1 }} >
                                Istoric Comenzi
                            </Button>
                        </Link>
                    </div>

                    {/* <div className="className">
                        <Link to="/contul-meu" style={hrefReset}>
                            <AccountCircleIcon size="medium" className="w-50" />
                        </Link>
                    </div> */}
                    {/* @ts-ignore */}
                    <Avatar size="medium">
                        <Link to="/contul-meu" style={hrefReset}>
                            <AccountCircleIcon className="w-50" />
                        </Link>
                    </Avatar>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
