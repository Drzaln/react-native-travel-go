import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { UPPER_MENU_DATA } from '../../constants/constantData'
import MenuItem from './MenuItem'

const UpperMenu = () => {
	const renderItem = ({ item }) => <MenuItem item={item} />
	return (
		<FlatList
			data={UPPER_MENU_DATA}
			renderItem={renderItem}
			keyExtractor={(item) => item.title}
			horizontal
			scrollEnabled={false}
			contentContainerStyle={styles.upperMenu}
		/>
	)
}

export default UpperMenu

const styles = StyleSheet.create({
	upperMenu: {
		paddingHorizontal: 24,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 24,
		flex: 1
	}
})
