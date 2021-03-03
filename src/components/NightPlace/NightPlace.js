import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { BEST_NIGHT_DATA } from '../../constants/constantData'
import TitleSection from '../TitleSection/TitleSection'
import NightItem from './NightItem'

const NightPlace = () => {
	const { width } = useWindowDimensions()
	const imageSize = Math.floor(width * 0.43)

	const renderItem = ({ item }) => <NightItem item={item} imageSize={imageSize} />

	return (
		<View style={styles.nightContainer}>
			<TitleSection title={`Best Friends' Night In`} />
			<FlatList
				contentContainerStyle={styles.itemWrapper}
				data={BEST_NIGHT_DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.title}
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

export default NightPlace

const styles = StyleSheet.create({
	nightContainer: {
		marginTop: 32
	},
	itemWrapper: {
		paddingLeft: 24,
		paddingRight: 6,
		marginTop: 16
	}
})
