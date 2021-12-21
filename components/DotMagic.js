import React from 'react'

export const DotMagic = ({ num, positionArr }) => {
  let dotArr = []
  for (let i = 1; i <= num; i++) {
    dotArr.push({class: `dot-${i}`, position: positionArr[i-1]})
  }

  return dotArr.map((dot) => 
  <div className={dot.class} style={dot.position} />)
}
