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
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>This is home</Text>		               
		    </View>
		);
	}
}