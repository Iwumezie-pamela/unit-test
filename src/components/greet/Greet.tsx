import React from 'react'

type Props = {
    name?: string
}

const Greet = ({name}: Props) => {
  return (
    <div>Hello World {name}</div>
  )
}

export default Greet