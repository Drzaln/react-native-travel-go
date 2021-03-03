import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Train ({ fill = '#fff', size = 31 }, props) {
	return (
		<Svg
			width={size}
			height={size + 4}
			viewBox='0 0 31 35'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}>
			<Path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M21.114 30.472c-1.808.127-3.747.127-5.689.127-1.897 0-3.782 0-5.539-.118v3.86H4.272v-1.87l1.33-2.664C2.57 28.926.53 27.062.53 23.114V8.144C.53.659 7.93.659 15.5.659s14.97 0 14.97 7.485v14.97c0 3.915-2.049 5.782-5.084 6.673l1.342 2.683v1.871h-5.614v-3.87zm-14.97-5.487a1.871 1.871 0 100-3.743 1.871 1.871 0 000 3.743zm18.712 0a1.871 1.871 0 100-3.743 1.871 1.871 0 000 3.743zM4.272 6.272V17.5h22.456V6.272H4.272z'
				fill={fill}
			/>
		</Svg>
	)
}

export default Train
