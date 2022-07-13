import Highlighter from "react-highlight-words";
import '../../styles/Link.css'
import { sharedProps } from '../App'
import { useContext } from 'react';


function copy(text: string) {
  navigator.clipboard.writeText(text).then(function() {
    console.log(`Copied: ${text}`);
  }, function(err) {
    alert(`Async: Could not copy text: ${err}`);
  });
}

interface LinkProps {
  url: string
  title: string
  method: string
}

function Link({ url, title, method }: LinkProps) {
  const {
    highlight: { highlight }
  } = useContext(sharedProps)

  return (
    <p onClick={_ => copy(
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
