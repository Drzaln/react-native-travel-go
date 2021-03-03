import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function More ({ fill = '#fff', size = 31 }, props) {
	return (
		<Svg width={size} height={size} viewBox='0 0 31 31' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<Path
				d='M13.473 4.318a1.468 1.468 0 102.935 0 1.468 1.468 0 00-2.935 0zM1.731 4.318a1.468 1.468 0 102.936 0 1.468 1.468 0 00-2.936 0z'
				stroke={fill}
				strokeWidth={2}
			/>
			<Path
				d='M25.214 4.318a1.468 1.468 0 102.935 0 1.468 1.468 0 00-2.935 0z'
				stroke='#FDFFB6'
				strokeWidth={4}
			/>
			<Path
				d='M13.473 16.06a1.468 1.468 0 102.935 0 1.468 1.468 0 00-2.935 0zM1.731 16.06a1.468 1.468 0 102.936 0 1.468 1.468 0 00-2.936 0zM25.214 16.06a1.468 1.468 0 102.935 0 1.468 1.468 0 00-2.935 0zM13.473 27.801a1.468 1.468 0 102.935 0 1.468 1.468 0 00-2.935 0zM1.731 27.801a1.468 1.468 0 102.936 0 1.468 1.468 0 00-2.936 0zM25.214 27.801a1.468 1.468 0 102.935 0 1.468 1.468 0 00-2.935 0z'
				stroke={fill}
				strokeWidth={2}
			/>
		</Svg>
	)
}

export default More
