import React from 'react'
import { Image, StyleSheet, useWindowDimensions, View } from 'react-native'
import CustomText from '../CustomText/CustomText'

const NextItem = ({ item }) => {
	const { width } = useWindowDimensions()
	const containerSize = Math.floor(width * 0.42)
	const imageSize = Math.floor(width * 0.25)

	return (
		<View style={styles.itemContainer(item.backgroundColor, containerSize)}>
			<Image style={styles.image(imageSize)} source={{ uri: item.image }} />
			<View style={styles.captionContainer}>
				<CustomText fontFamily='Bold' style={styles.imageCaption}>
					{item.title}
				</CustomText>
			</View>
		</View>
	)
}

export default NextItem

const styles = StyleSheet.create({
	itemContainer: (backgroundColor, containerWidth) => ({
		borderRadius: 8,
		padding: 8,
		width: containerWidth,
		margin: 8,
		backgroundColor
	}),
	image: (imageSize) => ({
		height: imageSize,
		width: '100%',
		borderRadius: 8
	}),
	captionContainer: { width: '75%' },
	imageCaption: {
		fontSize: 19,
		color: 'white',
		marginTop: 8
	}
})
