import React from 'react';
import Header from './Header';

export default {
    component:Header,
    title: 'Header',
}

const Template = args => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
    storeName: "Mo's Bagel Store",
    isLoggedIn: false,
    drawerState: false,
};

export const LoggedIn = Template.bind({});

LoggedIn.args = {
    storeName: "Mo's Bagel Store",
    isLoggedIn: true,
    drawerState: false,
};

export const DrawerOpen = Template.bind({});

DrawerOpen.args = {
    storeName: "Mo's Bagel Store",
    isLoggedIn: false,
    drawerState: true,
}