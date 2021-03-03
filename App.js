import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './src/components/BottomNav/BottomNav'
import List from './src/screens/List'
import User from './src/screens/User'

const Tab = createBottomTabNavigator()

export default function App () {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName='Home'
				backBehavior='initialRoute'
				tabBar={(props) => <BottomNav {...props} />}>
				<Tab.Screen name='Home' component={Home} />
				<Tab.Screen name='List' component={List} />
				<Tab.Screen name='User' component={User} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
