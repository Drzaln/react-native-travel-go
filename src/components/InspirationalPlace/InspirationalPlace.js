import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { INSPIRATION_DATA } from '../../constants/constantData'
import TitleSection from '../TitleSection/TitleSection'
import InspirationalItem from './InspirationalItem'

const InspirationalPlace = () => {
	const { width } = useWindowDimensions()
	const imageSize = Math.floor(width * 0.37)
	const renderItem = ({ item }) => <InspirationalItem item={item} imageSize={imageSize} />

	return (
		<View style={styles.inspirationContainer}>
			<TitleSection title='Best Inspiration Place' withMore />
			<FlatList
				contentContainerStyle={styles.itemWrapper}
				data={INSPIRATION_DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.title}
				showsHorizontalScrollIndicator={false}
				overScrollMode='never'
				horizontal
				decelerationRate='fast'
				snapToAlignment='start'
				snapToInterval={imageSize}
			/>
		</View>
	)
}
export default InspirationalPlace

const styles = StyleSheet.create({
	itemWrapper: {
		paddingLeft: 24,
		paddingRight: 8,
		marginTop: 16
	},
	inspirationContainer: {
		marginTop: 32
	}
})
