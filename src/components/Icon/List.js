import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function List ({ fill = '#323232' }, props) {
	return (
		<Svg width={22} height={22} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
			<Path
				d='M7.25 6.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM6.125 12.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM7.25 15.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM10.25 6.5a.75.75 0 000 1.5h6a.75.75 0 100-1.5h-6zM9.5 11.75a.75.75 0 01.75-.75h6a.75.75 0 110 1.5h-6a.75.75 0 01-.75-.75zM10.25 15.5a.75.75 0 100 1.5h6a.75.75 0 100-1.5h-6z'
				fill={fill}
			/>
			<Path
				d='M.5 3.5a3 3 0 013-3h15a3 3 0 013 3v15a3 3 0 01-3 3h-15a3 3 0 01-3-3v-15zm3-1.5A1.5 1.5 0 002 3.5v15A1.5 1.5 0 003.5 20h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0018.5 2h-15z'
				fill={fill}
			/>
		</Svg>
	)
}

export default List
