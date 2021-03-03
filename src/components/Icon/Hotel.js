import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Hotel ({ fill = '#fff', size = 39 }, props) {
	return (
		<Svg
			width={size}
			height={size - 4}
			viewBox='0 0 39 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<Path
				d='M28.856 30.599H32.6v-14.97H21.37v14.97h3.743V19.37h3.742V30.6zm-26.197 0V2.529A1.871 1.871 0 014.529.66h26.199a1.871 1.871 0 011.87 1.87v9.357h3.743V30.6h1.872v3.742H.787V30.6H2.66zm7.485-14.97v3.742h3.742V15.63h-3.742zm0 7.485v3.742h3.742v-3.742h-3.742zm0-14.97v3.742h3.742V8.144h-3.742z'
				fill={fill}
			/>
		</Svg>
	)
}

export default Hotel
