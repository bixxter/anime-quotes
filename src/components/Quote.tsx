import { FC, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
interface Props {
  anime: string;
  character: string;
  quote: string;
  poster: string;
  loadQuote: () => void;
}

const Quote: FC<Props> = ({ anime, character, quote, poster, loadQuote }) => {
  const [copied, setCopied] = useState(false);
  const onCopyText = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <div className="cardInner">
      <h1>{anime}</h1>
      <img src={poster} alt={anime} />
      <p>"{quote}"</p>
      <span>-{character}</span>
      {copied ? "copied" : null}
      <div className="cardInner__buttons">
        <CopyToClipboard text={quote} onCopy={() => onCopyText()}>
          <span className="btn" role="img" aria-label="FLOPPY DISK">
            💾
          </span>
        </CopyToClipboard>

        <button
          className="btn"
          onClick={() => {
            loadQuote();
          }}
        >
          next🍀
        </button>
      </div>
    </div>
  );
};

export default Quote;
