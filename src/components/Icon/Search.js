import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Search(props) {
  return (
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 20l-4.486-4.494L20 20zM18 9.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0v0z"
        stroke="#767676"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default Search
