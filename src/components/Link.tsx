import Highlighter from "react-highlight-words";
import '../styles/Link.css'

interface Props {
  url: string
  keyword: string
}

function Link({ url, keyword }: Props) {
  return (
    <p>
      <Highlighter
        searchWords={[keyword]}
        textToHighlight={url}
      />
    </p>
  )
}

export default Link
