import Highlighter from "react-highlight-words";
import '../styles/Link.css'

function copy(text: string) {
  navigator.clipboard.writeText(text).then(function() {
    console.log(`Copied: ${text}`);
  }, function(err) {
    alert(`Async: Could not copy text: ${err}`);
  });
}

interface LinkProps {
  title: string
  url: string
  keyword: string
  highlight: string
}

function Link({ title, url, keyword, highlight }: LinkProps) {
  return (
    <p onClick={_ => copy(
      `youtube-dl "${url}" -o "${title}.mp4"`
    )}>
      <Highlighter
        searchWords={[keyword, highlight]}
        textToHighlight={url}
      />
    </p>
  )
}

export default Link
