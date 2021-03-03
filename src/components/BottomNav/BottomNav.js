import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { List, User, Home } from '../Icon/Index'

const BottomNav = ({ state, navigation }) => {
	const { routes } = state

	return (
		<View style={styles.absoluteContainer}>
			<View style={styles.navContainer}>
				{routes.map((route, index) => {
					const isFocused = state.index === index
					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key
						})
						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name)
						}
					}

					return (
						<BottomIcon
							key={index}
							name={route.name}
							onPress={onPress}
							fill={isFocused ? '#FFADAD' : '#323232'}
						/>
					)
				})}
			</View>
		</View>
	)
}

export default BottomNav

const BottomIcon = ({ name, onPress, fill }) => {
	let icon
	switch (name) {
		case 'Home':
			icon = <Home fill={fill} />
			break
		case 'List':
			icon = <List fill={fill} />
			break
		case 'User':
			icon = <User fill={fill} />
			break

		default:
			icon = null
			break
	}
	return (
		<Pressable onPress={onPress} hitSlop={{ bottom: 16, top: 16, left: 16, right: 16 }}>
			{icon}
		</Pressable>
	)
}

const styles = StyleSheet.create({
	absoluteContainer: {
		backgroundColor: 'transparent',
		position: 'absolute',
		bottom: 40,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	navContainer: {
		backgroundColor: 'white',
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 14,
		paddingHorizontal: 24,
		borderRadius: 100
	}
})
