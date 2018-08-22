/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
	View,
	Image,
	Text
} from 'react-native';
import {
	createStackNavigator,
} from 'react-navigation';
export default class Home extends React.Component {
	static navigationOptions = () => ({
		header: null,
	});
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'row',}}>
				<Image style={{width:25,height:25,marginLeft:5}} source={require('../public/img/login/07.png')}/>
				<Text>This is home</Text>	
				<Image style={{width:25,height:25,marginRight:5}} source={require('../public/img/login/08.png')}/>	               
		    </View>
		);
	}
}