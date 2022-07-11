import React from 'react'
import '../styles/Link.css'

interface Props {
  url: string
}

function Link({ url }: Props) {
  return (
    <p>{url}</p>
  )
}

export default Link
