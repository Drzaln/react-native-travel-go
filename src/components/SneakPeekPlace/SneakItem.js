import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const SneakItem = ({ item, imageSize }) => {
	return (
		<View style={styles.itemContainer(imageSize)}>
			<Image style={styles.image(imageSize)} source={{ uri: item.image }} />
		</View>
	)
}

export default SneakItem

const styles = StyleSheet.create({
	itemContainer: (size) => ({
		width: size,
		height: size,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'transparent',
		borderRadius: size / 2,
		borderColor: '#A2D2FF',
		borderWidth: 2,
		marginRight: 18
	}),
	image: (size) => ({
		width: size - 11,
		height: size - 11,
		borderRadius: 91 / 2
	})
})
