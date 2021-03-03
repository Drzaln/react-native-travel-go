import React from 'react'
import { StyleSheet, View } from 'react-native'
import CustomText from '../CustomText/CustomText'
import { Search } from '../Icon/Index'

const Header = () => (
	<View style={styles.header}>
		<View style={styles.searchContainer}>
			<View style={styles.iconWrapper}>
				<Search />
			</View>
			<CustomText style={styles.text}>Search items, destinations...</CustomText>
		</View>
	</View>
)
export default Header

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#A2D2FF',
		paddingVertical: 12,
		paddingHorizontal: 24
	},
	searchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 18
	},
	iconWrapper: {
		marginRight: 16
	},
	text: {
		color: '#8E8E8E'
	}
})
