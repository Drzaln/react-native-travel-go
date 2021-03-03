import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import CustomText from '../CustomText/CustomText'

const InspirationalItem = ({ item, imageSize }) => {
	return (
		<View style={styles.itemContainer}>
			<Image style={styles.image(imageSize)} source={{ uri: item.image }} />
			<CustomText style={styles.imageCaption}>{item.title}</CustomText>
		</View>
	)
}

export default InspirationalItem

const styles = StyleSheet.create({
	itemContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 16
	},
	image: (size) => ({
		width: size,
		height: size,
		borderRadius: 8
	}),
	imageCaption: {
		marginTop: 8
	}
})
