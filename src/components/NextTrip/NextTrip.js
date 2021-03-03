import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { NEXT_TRIP_DATA } from '../../constants/constantData'
import TitleSection from '../TitleSection/TitleSection'
import NextItem from './NextItem'

const NextTrip = () => {
	const renderItem = ({ item }) => <NextItem item={item} />

	return (
		<View style={styles.nextTripContainer}>
			<TitleSection title='Your Next Trip' />
			<FlatList
				contentContainerStyle={styles.itemWrapper}
				data={NEXT_TRIP_DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.title}
				scrollEnabled={false}
				numColumns={2}
			/>
		</View>
	)
}

export default NextTrip

const styles = StyleSheet.create({
	itemWrapper: {
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 24,
		marginTop: 8
	},
	nextTripContainer: {
		marginTop: 32
	}
})
