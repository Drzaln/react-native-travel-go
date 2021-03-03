import React from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import Header from '../components/Header/Header'
import InspirationalPlace from '../components/InspirationalPlace/InspirationalPlace'
import MiniMenu from '../components/MiniMenu/MiniMenu'
import NextTrip from '../components/NextTrip/NextTrip'
import NightPlace from '../components/NightPlace/NightPlace'
import SneakPeekPlace from '../components/SneakPeekPlace/SneakPeekPlace'
import UpperMenu from '../components/UpperMenu/UpperMenu'

const Home = () => {
	const scrollY = React.useRef(new Animated.Value(0)).current
	const [ offset, setOffset ] = React.useState(true)

	const onScrollHandler = ({ nativeEvent }) => {
		let y = nativeEvent.contentOffset.y
		scrollY.setValue(y)
		let scrollValue = y
		if (scrollValue > 70 && offset) {
			setOffset(false)
		}
		if (scrollValue < 70 && !offset) {
			setOffset(true)
		}
	}

	return (
		<SafeAreaView>
			<StatusBar
				animated
				backgroundColor={offset ? '#A2D2FF' : '#fff'}
				barStyle={offset ? 'light-content' : 'dark-content'}
			/>
			<ScrollView
				contentContainerStyle={styles.mainContainer}
				showsVerticalScrollIndicator={false}
				overScrollMode='never'
				onScroll={onScrollHandler}>
				<Header />
				<UpperMenu />
				<InspirationalPlace />
				<SneakPeekPlace />
				<NextTrip />
				<NightPlace />
			</ScrollView>
			<MiniMenu scrollY={scrollY} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#FDFDFF',
		paddingBottom: 110
	}
})

export default Home
