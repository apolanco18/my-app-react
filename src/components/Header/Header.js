import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import "./Header.css";

const Header = ({storeName,isLoggedIn}) => {

    return (
        <div className="root">
            <AppBar position="static">
                <Toolbar className="header-container">
                    <div className="left-side">
                        <IconButton edge="start" className="menu-button" color="inherit" ari-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className="title">
                            {storeName}
                        </Typography>
                    </div>
                    <div>
                        {
                            (isLoggedIn) ? <Button color="inherit">Log Out</Button> : <Button color="inherit">Login</Button>
                            
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;