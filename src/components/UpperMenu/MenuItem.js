import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import CustomText from '../CustomText/CustomText'

const MenuItem = ({ item }) => {
	const { width } = useWindowDimensions()
	const menuSize = Math.floor(width * 0.15)
	return (
		<View style={styles.menuItem}>
			<View style={styles.menuIcon(item.backgroundColor, menuSize)}>{item.icon}</View>
			<CustomText style={styles.menuTitle}>{item.title}</CustomText>
		</View>
	)
}

export default MenuItem

const styles = StyleSheet.create({
	menuItem: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	menuIcon: (backgroundColor, size) => ({
		backgroundColor,
		width: size,
		height: size,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center'
	}),
	menuTitle: {
		color: '#808080',
		fontSize: 12,
		marginTop: 8
	}
})
