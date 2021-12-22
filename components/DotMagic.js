import React from 'react'

export const DotMagic = ({ num }) => {
  let dotArr = []
  for (let i = 1; i <= num; i++) {
    const randomIntTop = Math.floor(Math.random() * 101)
    const randomIntLeft = Math.floor(Math.random() * 101)
    const positions = {
      top: `${randomIntTop}%`,
      left: `${randomIntLeft}%`,
    }
    dotArr.push({class: `dot-${i}`, position: positions})
  }

  return dotArr.map((dot) => 
  <div className={dot.class} style={dot.position} />)
}
