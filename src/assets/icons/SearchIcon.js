import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
  const  SearchIcon = ( {width=18 , height=16 , ...props}) => (
  <Svg  width={width} height={height}  fill="none" {...props}>
    <G
      stroke="#122704"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M7.982 14.413c3.724 0 6.742-2.844 6.742-6.353s-3.018-6.353-6.742-6.353S1.239 4.551 1.239 8.06s3.019 6.353 6.743 6.353ZM16.522 14.407l-1.798-1.694" />
    </G>
  </Svg>
)

export  default SearchIcon
 
