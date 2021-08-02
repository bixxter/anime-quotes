import { FC } from "react";

interface Props {
  anime: string;
  character: string;
  quote: string;
  poster: string;
  loadQuote: () => void;
}

const Quote: FC<Props> = ({ anime, character, quote, poster, loadQuote }) => {
  return (
    <div className="cardInner">
      <h1>{anime}</h1>
      <img src={poster} alt={anime} />
      <p>"{quote}"</p>
      <span>-{character}</span>

      <div className="cardInner__buttons">
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
