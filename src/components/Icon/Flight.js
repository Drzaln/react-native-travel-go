import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Flight ({ fill = '#fff', size = 36 }, props) {
	return (
		<Svg
			width={size}
			height={size - 1}
			viewBox='0 0 36 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<Path
				d='M3.401 18.834L.75 21.485l9.28 3.977 3.978 9.281 2.651-2.651-1.325-6.63 6.212-6.212 6.768 14.445 2.511-2.51-2.231-18.981 5.302-5.305a3.75 3.75 0 10-5.302-5.302L23.15 7.04 4.17 4.807 1.798 7.18l14.333 6.88-6.1 6.1-6.63-1.327z'
				fill={fill}
			/>
		</Svg>
	)
}

export default Flight
