import React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from '../CustomText/CustomText'
import Right from '../Icon/Right'

const TitleSection = ({ title, withMore = true }) => {
	return (
		<View style={styles.titleContainer}>
			<CustomText style={styles.title} fontFamily='SemiBold'>
				{title}
			</CustomText>
			{withMore ? (
				<View style={styles.moreContainer}>
					<CustomText style={styles.moreText}>More</CustomText>
					<Right />
				</View>
			) : null}
		</View>
	)
}

export default TitleSection

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 24
	},
	moreContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 24
	},
	title: {
		fontSize: 18
	},
	moreText: {
		marginRight: 12,
		color: '#498AC1'
	}
})
