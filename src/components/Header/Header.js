import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import "./Header.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import MailIcon from '@material-ui/icons/Mail';

import {routes, RouteWithSubRoutes} from '../../lib/routing';



const Header = ({storeName,isLoggedIn,drawerState}) => {

    const [state, setState] = React.useState({
        drawer: drawerState,
        title: storeName,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, ['drawer']: open});
    }

    const list = () => {
        return (
            <div
                className="list"
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                    <List>
                        {
                            (routes).map((route) => (
                                <Link to={route.path}>
                                    <ListItem button key={route.name}>
                                        <ListItemIcon>{<route.icon/>}</ListItemIcon>
                                        <ListItemText primary={route.name}/>            
                                    </ListItem> 

                                </Link> 
                                
                            ))
                        }          
                    </List>

                
            </div>
        )
    }

    return (
        <div className="root">
            <AppBar position="static">
                <Toolbar className="header-container">
                    <div className="left-side">
                        <IconButton onClick={toggleDrawer(true)} edge="start" className="menu-button" color="inherit" ari-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Drawer anchor={'left'} open={state['drawer']} onClose={toggleDrawer(false)}>
                            {list()}
                        </Drawer>
                        <Typography variant="h6" className="title">
                            {state['title']}
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