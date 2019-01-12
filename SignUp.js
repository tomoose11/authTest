import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  view,
  KeyboardAvoidingView,
  ScrollView
  
} from 'react-native';
import firebase from './config';
// import * as firebase from 'firebase';

// import 'firebase/firestore';
// import { config } from './config';



// const settings = { timestampsInSnapshots: true };

// firebase.initializeApp(config);
// firebase.firestore().settings(settings);

export default class Login extends Component {
  constructor(props) {
    super(props);
    state = {
      email: '',
      password: '',
      confirmPassword:'',
      confirmEmail:''
    };

  
  }

  componentDidMount = () => {
 
  }

  onClickListener = viewId => {
    // Alert.alert('Alert', 'Button pressed ' + viewId);
    const {confirmEmail, email, password, confirmPassword} = this.state;
    if(confirmEmail !== email || confirmPassword !== password) {
      Alert.alert('Alert','Password is not equal to confirmed password')
    } else {
    console.log(this.state.email)
    console.log('working')
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(res => {
    console.log('signed up');
   this.props.navigation.navigate('InnerStuff')})
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      Alert.alert('Alert','Something went wrong, please try again')
      console.error(error.message);
      // ...
    });
  }
  };

  render() {
    return (
      
      <KeyboardAvoidingView keyboardVerticalOffset = {-130} 
      style = {{ flex: 1 }} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={require('./assets/erda-estremera-786462-unsplash.jpg/')}
        >
          <View style={styles.imCover}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={email => this.setState({ email })}
              />
              <Image
                style={styles.inputIcon}
                source={{
                  uri: 'https://img.icons8.com/nolan/40/000000/email.png'
                }}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Confirm Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={confirmEmail => this.setState({ confirmEmail })}
              />
              <Image
                style={styles.inputIcon}
                source={{
                  uri: 'https://img.icons8.com/nolan/40/000000/email.png'
                }}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={password => this.setState({ password })}
              />
              <Image
                style={styles.inputIcon}
                source={{
                  uri: 'https://img.icons8.com/nolan/40/000000/key.png'
                }}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Confirm Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={confirmPassword => this.setState({ confirmPassword })}
              />
              <Image
                style={styles.inputIcon}
                source={{
                  uri: 'https://img.icons8.com/nolan/40/000000/key.png'
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.btnForgotPassword}
              onPress={() => this.onClickListener('restore_password')}
            >
              <Text style={styles.btnText}>Forgot your password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.onClickListener('login')}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.onClickListener('register')}
            >
              <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
      
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
  },
  imCover: {
    backgroundColor: 'rgba(0, 0, 0, 0.456)',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent'
  },
  btnForgotPassword: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
    width: 300,
    backgroundColor: 'transparent'
  },
  loginButton: {
    backgroundColor: '#00b5ec',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19
  },
  loginText: {
    color: 'white'
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',

    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
