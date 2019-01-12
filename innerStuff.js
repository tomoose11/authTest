import React, { Component } from 'react';
import {Text,View,Button} from 'react-native';
import firebase from './config';

class innerStuff extends Component {

    handleSignout = () => {
        firebase.auth().signOut().then((res)=> {
           
            this.props.navigation.navigate('Welcome');
            
        });
    }

    render() {
        return (
            <View><Text>innerStuff</Text><Button onPress={this.handleSignout} title="signout"></Button></View>
        );
    }
}

export default innerStuff;