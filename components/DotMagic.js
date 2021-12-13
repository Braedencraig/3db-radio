import React from 'react'

export const DotMagic = ({ num }) => {
  let dotArr = []
  for (let i = 1; i <= num; i++) {
    dotArr.push(`dot-${i}`)
  }

  return dotArr.map((dot) => <div className={dot} />)
}
