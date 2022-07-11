import React from 'react'
import '../styles/Link.css'

interface Props {
  key: number,
  url: string
}

function Link({ key, url }: Props) {
  return (
    <p key={key}>{url}</p>
  )
}

export default Link
