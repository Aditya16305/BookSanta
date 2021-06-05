import * as React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
import BookRequest from '../Screens/BookRequest';
import BookDonate from '../Screens/BookDonate';

export const AppTabNavigator = createBottomTabNavigator({
    donateBooks: {
        screen: BookDonate,
        tabBarIcon: <Image source = {require('../assets/images-main/request-list.png')}/>,
        tabBarLabel: 'Book Donate'
    },

    requestBooks: {
        screen: BookRequest,
        tabBarIcon: <Image source = {require('../assets/images-main/request-book.png')}/>,
        tabBarLabel: 'Book Request'
    }
});