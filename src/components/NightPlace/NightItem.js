import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import CustomText from '../CustomText/CustomText'

const NightItem = ({ item, imageSize }) => {
	return (
		<ImageBackground
			style={styles.imageContainer(imageSize)}
			imageStyle={styles.image}
			source={{ uri: item.image }}>
			<View style={[ StyleSheet.absoluteFillObject, styles.overlay ]} />
			<View style={styles.textContainer}>
				<CustomText style={styles.imageTitle} fontFamily='Bold'>
					{item.title}
				</CustomText>
				<CustomText style={styles.imageSubTitle} fontFamily='SemiBold'>
					{item.subtitle}
				</CustomText>
			</View>
		</ImageBackground>
	)
}

export default NightItem

const styles = StyleSheet.create({
	imageContainer: (size) => ({
		width: size,
		height: size,
		borderRadius: 8,
		marginRight: 18
	}),
	image: { borderRadius: 8 },
	overlay: {
		backgroundColor: 'black',
		opacity: 0.24,
		borderRadius: 8
	},
	textContainer: {
		padding: 16
	},
	imageTitle: {
		color: 'white',
		fontSize: 18
	},
	imageSubTitle: {
		color: 'white'
	}
})
