import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeWrapper from '../components/Home/HomeWrapper'
import HomeIcon from '@material-ui/icons/Home';

import PhoneIcon from '@material-ui/icons/Phone';
import Contact from '../components/Contact'

export const routes = [
    {
        path: "/",
        name:"Home",
        icon: HomeIcon,
        component: HomeWrapper
    },
    {
        path: "/Contact",
        name: "Contact",
        icon: PhoneIcon,
        component: Contact
    }
]

export const RouteWithSubRoutes = (route) => {
    return  (
        <Route
            path={route.path}
            render={props=> (
                <route.component {...props} routes={route.routes} />
            )}
        />
    )
}

