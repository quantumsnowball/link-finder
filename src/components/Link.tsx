import Highlighter from "react-highlight-words";
import '../styles/Link.css'

interface Props {
  url: string
  keyword: string
  highlight: string
}

function Link({ url, keyword, highlight }: Props) {
  return (
    <p>
      <Highlighter
        searchWords={[keyword, highlight]}
        textToHighlight={url}
      />
    </p>
  )
}

export default Link
