/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  View,
  Image
} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import Login from './component/login'
class starScreen extends React.Component {
  static navigationOptions = () => ({
    header: null,
  });
  //注释
  componentDidMount() {
    window.start = setTimeout(() => this.props.navigation.navigate('Login'), 1000)
  }
  componentWillUnmount() {
    window.clearTimeout(window.start);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./public/img/start.png')} style={{ width: 150, height: 80 }} />         
      </View>
    );
  }
}
const RootStack = createStackNavigator({
  Start: starScreen,
  Login: Login,
}, {
  initialRouteName: 'Start',
}, );
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}