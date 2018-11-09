import React from 'react';
import {DrawerNavigator, createStackNavigator} from 'react-navigation';

import Settings from '../menu/settings';
import Terms from '../terms';
import SideMenu from '../menu/side-menu';
import Catalog from '../scenes/Catalog';
import Login from '../scenes/Login';
import DetailProduct from '../scenes/CatalogDetail';
import ShoppingCartIcon from '../shopping-cart-icon';

const stackSettings = createStackNavigator({
    CatalogScreen: {screen: Catalog},
    DetailScreen: {screen: DetailProduct},  
},{
    initialRouteName: 'DetailScreen',
});

export const Nav = DrawerNavigator({
    HomeScreen: {screen: Catalog},
    SettingStack: stackSettings
},{
    contentComponent: SideMenu
});
