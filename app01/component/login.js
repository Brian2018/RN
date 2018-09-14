/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button
} from 'react-native';
import Home from './home';
import {
  createStackNavigator,
} from 'react-navigation';
class Login extends Component {
  static navigationOptions = ({
    navigation
  }) => ({
    header: null,
  });
  render() {
    return (
      <View style={styles.page}>
        <Image source={require('../public/img/login/11.png')} style={styles.img1} />
        <Image source={require('../public/img/login/12.png')} style={styles.imgText}/>
        <View style={{flexDirection:'row'}}>
          <Image source={require('../public/img/login/07.png')} style={styles.img07}/>
          <Text style={styles.text}>账号:</Text>
          <TextInput style={styles.input} placeholder="请输入用户名"/>
        </View>
        <View style={{flexDirection:'row'}}>
          <Image source={require('../public/img/login/08.png')} style={styles.img07}/>
          <Text style={styles.text}>密码:</Text>
          <TextInput password={true} style={styles.input} placeholder="请输入密码"/>
        </View>
        <View style={{margin:50}}>
          <Button style={styles.button} title='登录' onPress={()=>this.props.navigation.navigate('Home')}/>
        </View>
        <Image source={require('../public/img/login/15.png')} style={{width:65,height:55,marginLeft:150 }}/>
        <Image source={require('../public/img/login/18.png')} style={{width:360,height:70,marginLeft:0,position:'absolute',bottom:0}}/>
      </View>
    );
  }
}
const Page = createStackNavigator({
  Login: Login,
  Home: Home,
}, {
  initialRouteName: 'Login',
}, );
export default class App extends React.Component {
  static navigationOptions = () => ({
    header: null,
  });
  render() {
    return (
      <Page/>
    )
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  img1: {
    width: 120,
    height: 120,
    marginLeft: 120,
    marginTop: 50
  },
  img07: {
    width: 25,
    height: 25,
    marginTop: 30,
    marginLeft: 50
  },
  imgText: {
    width: 120,
    height: 15,
    marginLeft: 120,
    marginTop: 10
  },
  input: {
    width: 200,
    height: 40,
    marginTop: 20,
    fontSize: 17,
  },
  text: {
    marginTop: 30,
    padding: 5
  },
  button: {
    width: 200,
    marginLeft: 20,
  }
})
