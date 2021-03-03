import React from 'react'
import { StyleSheet, Text } from 'react-native'

const CustomText = ({ children = '', fontFamily = 'Regular', style }) => {
	return <Text style={[ styles.text(fontFamily), style ]}>{children}</Text>
}

export default CustomText

const styles = StyleSheet.create({
	text: (font) => ({
		fontFamily: `Poppins-${font}`,
		fontSize: 14,
		includeFontPadding: false
	})
})
