import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../Components/MyHeader';

export default class BookDonate extends React.Component {
    
    constructor() {
        super();
        this.state = {
            requestedBookList: []
        }

        this.requestRef = null;
    }
    
    keyExtractor = (item, index) => {
        index.toString();
    }

    renderItem = ({
        item , i
    }) => {
        return (
            <ListItem 
            key = {i}
            title = {item.book_name}
            subTitle = {item.reason_to_request}
            titleStyle = {{color: black, fontWeight: 'bold'}}
            rightElement = {
                <TouchableOpacity style = {styles.Button}><Text style = {styles.ButtonText}> View </Text></TouchableOpacity>
            } />
        )
    }

    render() {
        return (
            <View style = {{flex: 1}}>
                <MyHeader title = 'Donate Books' navigation = {this.props.navigation} />
                {/* <Text> Book Donate </Text> */}
                <FlatList keyExtractor = {this.keyExtractor}
                data = {this.state.requestedBookList}
                renderItem = {this.renderItem} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Button:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      ButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
      },
})
