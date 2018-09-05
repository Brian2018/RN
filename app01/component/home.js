/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
	View,
	Image,
	Text,
	StyleSheet,
} from 'react-native';
import {
	Button
} from 'antd-mobile';
import {
	createStackNavigator,
} from 'react-navigation';
import Swiper from 'react-native-swiper';
//煮熟
export default class Home extends React.Component {
	static navigationOptions = () => ({
		header: null,
	});
	render() {
		return (
			<View style={{ flex: 1,backgroundColor:'#fff'}}>
				<View style={{ flex: 1, flexDirection: 'row',height:10}}>
					<Image style={styles.titlePic} source={require('../public/img/login/07.png')}/>
					<Text style={{ flex: 10,textAlign: 'center',lineHeight:40}}>This is home</Text>	
					<Image style={styles.titleSearch} source={require('../public/img/topTabBar/topSearch.png')}/>						
				</View>
				<View style={{flex: 5,height:170}}>
					<Swiper style={{flex: 1,height:170}} autoplay={true}
						autoplayTimeout={5} >
			            <View style={{flex: 1,height:170}} >
			                <Image style={{width:400,height:170}} source={require('../public/img/home/home_nzmg/2_01.png')}/>
			            </View>
			            <View style={{flex: 1,height:170}} >
			                <Image style={{width:400,height:170}} source={require('../public/img/home/home_nzmg/2_02.png')}/>
			            </View>
			            <View style={{flex: 1,height:170}} >
			                <Image style={{width:400,height:170}} source={require('../public/img/home/home_nzmg/2_03.png')}/>
			            </View>
			        </Swiper>						
			    </View> 
			    <View style={{flex: 12,height:170}}>
					<View style={{flex:1,flexDirection:'row',padding:5}}>
						<View style={styles.middle1}><Text style={styles.middleText}>项目数:</Text></View>
						<View style={styles.middle2}><Text style={styles.middleText}>电站数:</Text></View>
					</View>
					<View style={{flex:8}}></View>
			    </View>		            
		    </View>

		);
	}
}
const styles = StyleSheet.create({
	titlePic: {
		width: 20,
		height: 20,
		marginLeft: 5,
		margin: 10,
	},
	titleSearch: {
		width: 20,
		height: 20,
		margin: 10,
	},
	middle1: {
		flex: 5,
		backgroundColor: '#54A3FF',
		color: '#fff',
		marginRight: 5,
		borderRadius: 3
	},
	middle2: {
		flex: 5,
		backgroundColor: '#F34270',
		color: '#fff',
		borderRadius: 3
	},
	middleText: {
		color: "#fff",
		lineHeight: 35,
		padding: 5
	}
})