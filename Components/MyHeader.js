import * as React from 'react';
import {Header, Icon, Badge} from 'react-native-elements';
import {View} from 'react-native';

const MyHeader = props => {
    return (
        <Header
        centerComponent = {{text: props.title, style: {color: 'black', fontSize: 20, fontWeight: 'bold'}}}
        backgroundColor = 'white'/>
    )
}