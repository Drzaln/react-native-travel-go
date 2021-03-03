import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SNEAKPEEK_DATA } from '../../constants/constantData'
import TitleSection from '../TitleSection/TitleSection'
import SneakItem from './SneakItem'

const SneakPeekPlace = () => {
	const { width } = useWindowDimensions()
	const imageSize = Math.floor(width * 0.25)
	const renderItem = ({ item }) => <SneakItem item={item} imageSize={imageSize} />
	return (
		<View style={styles.sneakPeekContainer}>
			<TitleSection title='SneakPeek: Best Spot Place' withMore={false} />
			<FlatList
				contentContainerStyle={styles.itemWrapper}
				data={SNEAKPEEK_DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.image}
				showsHorizontalScrollIndicator={false}
				overScrollMode='never'
				horizontal
				decelerationRate='fast'
				snapToAlignment='start'
				snapToInterval={imageSize + 18}
			/>
		</View>
	)
}

export default SneakPeekPlace

const styles = StyleSheet.create({
	sneakPeekContainer: {
		marginTop: 32
	},
	itemWrapper: {
		paddingLeft: 24,
		paddingRight: 6,
		marginTop: 16
	}
})
