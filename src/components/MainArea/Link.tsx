import Highlighter from "react-highlight-words";
import '../../styles/Link.css'
import { states } from '../App'
import { copyText } from '../../utils/data'
import { useContext } from 'react';


interface LinkProps {
  url: string
  title: string
  method: string
}

function Link({ url, title, method }: LinkProps) {
  const {
    highlight: { highlight }
  } = useContext(states)

  return (
    <p onClick={_ => copyText(
      `youtube-dl "${url}" -o "${title}.mp4"`
    )}>
      <span>{method} </span>
      <Highlighter
        searchWords={[highlight]}
        textToHighlight={url}
      />
    </p>
  )
}

export default Link
