import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function User ({ fill = '#323232' }, props) {
	return (
		<Svg width={22} height={26} viewBox='0 0 22 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<Path
				d='M11 11.75a5 5 0 110-10 5 5 0 010 10zM1 24.25V23a7.5 7.5 0 017.5-7.5h5A7.5 7.5 0 0121 23v1.25'
				stroke={fill}
				strokeWidth={2}
				strokeLinecap='round'
			/>
		</Svg>
	)
}

export default User
