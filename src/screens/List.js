import React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from '../components/CustomText/CustomText'

const List = () => {
	return (
		<View style={styles.container}>
			<CustomText style={styles.text} fontFamily='SemiBold'>
				Under Development
			</CustomText>
		</View>
	)
}

export default List

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FDFDFF',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 24,
		color: '#808080'
	}
})
