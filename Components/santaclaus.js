import react from 'react';
import {LottieView} from 'lottie-react-native'
import React from 'react';

export default class santaclaus extends React.Component {
    render() {
        return (
            <LottieView source = {require('..assets/13015-santaclaus.json')}
            style = {{width: '60%'}}
            autoplay loop>

            </LottieView>
        )
    }
}