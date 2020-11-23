/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, TabActions } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TodoList from './components/TodoList';
import TodoWrite from './components/TodoWrite';

const Tap = createBottomTabNavigator()

const screenOptions = ({route}) => ({
	tabBarIcon: ({ color, size }) => {
		if(route.name === "목록") {
			return <Ionicons name="ios-list" size={size} color={color} />
		}

		if(route.name === "추가") {
			return <Ionicons name="ios-add" size={size} color={color} />
		}
	}
})

const App = () => {
	return (
		<NavigationContainer>
			<Tap.Navigator screenOptions={screenOptions}>
				<Tap.Screen name="목록" component={TodoList} />
				<Tap.Screen name="추가" component={TodoWrite} />
			</Tap.Navigator>
		</NavigationContainer>
	);
};



export default App;
