import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList, TextInput} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../Components/MyHeader';

export default class BookRequest extends React.Component {
    
    constructor() {
        this.state = {
            bookName: '',
            reasonToRequest: '',
            userId: firebase.auth().currentUser.email,
        }
    }

    addRequest = (bookName, reasonToRequest) => {
        var userId = this.state.userId;
        var randomRequestId = this.createUniqueId();

        db.collection('requestedBooks').add({
            'user_id': userId,
            'book_name': bookName,
            'reason_to_reauest': reasonToRequest,
            'request_id': randomRequestId,
        })
    }
    
    render() {
        return (
            <View>
                {/* <Text> Book Request </Text> */}
                <TextInput 
                placeholder = 'Enter Book Name' 
                onChangeText = {(text) => {
                    this.setState = {
                        bookName: text
                    }
                }} />

                <TextInput 
                placeholder = 'Enter reason to request'
                keyboardType = 'Multiline'
                onChangeText = {(text) => {
                    this.setState = {
                        reasonToRequest: text
                    }
                }} />

                <TouchableOpacity style = {styles.Button} 
                onPress = {() => {
                        this.addRequest(this.bookName, this.reasonToRequest);
                    }}>
                    <Text style = {styles.ButtonText}>
                        Request
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.Button}>
                    <Text style = {styles.ButtonText}>
                        Cancel
                    </Text>
                </TouchableOpacity>
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

// Create 2 text inputs for book name and reason 
// 1 TouchableOpacity for request button 
// call addRequest from onpress prop 
// dummicoder@gmail.com
