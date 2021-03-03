import React from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated'
import { Flight, Hotel, More, Train } from '../Icon/Index'

const MiniMenu = ({ scrollY }) => {
	const top = interpolate(scrollY, {
		inputRange: [ 100, 150 ],
		outputRange: [ -60, 20 ],
		extrapolate: Extrapolate.CLAMP
	})

	const opacity = interpolate(scrollY, {
		inputRange: [ 100, 145 ],
		outputRange: [ 0, 1 ],
		extrapolate: Extrapolate.CLAMP
	})

	return (
		<Animated.View
			style={[
				styles.animatedContainer,
				{
					top,
					opacity
				}
			]}>
			<View style={styles.menuContainer}>
				<Flight fill='#4ECDC4' size={20} />
				<Hotel fill='#FF6B6B' size={20} />
				<Train fill='#1A535C' size={20} />
				<More fill='#323232' size={20} />
			</View>
		</Animated.View>
	)
}

export default MiniMenu

const styles = StyleSheet.create({
	animatedContainer: {
		position: 'absolute',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	menuContainer: {
		backgroundColor: 'white',
		elevation: 1,
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 18,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '70%'
	}
})
