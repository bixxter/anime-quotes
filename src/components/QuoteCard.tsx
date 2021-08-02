import { FC, useEffect, useState } from "react";
import Quote from "./Quote";
import Loader from "./Loader";

interface Anime {
  anime: string;
  character: string;
  quote: string;
}

const QuoteCard: FC = () => {
  const [data, setData] = useState<Anime | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [poster, setPoster] = useState("");
  const loadQuote = () => {
    setData(null);
    setIsLoading(true);
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((quote) => (setData(quote), loadPoster(quote.anime)));

    setIsLoading(false);
  };
  const loadPoster = (anime: string) => {
    fetch("https://kitsu.io/api/edge/anime?filter[text]=" + anime)
      .then((response) => response.json())
      .then((data) => setPoster(data.data[0].attributes.posterImage.original));
  };

  useEffect(() => {
    loadQuote();
  }, []);

  return (
    <div className="card">
      {data && !isLoading ? (
        <Quote
          anime={data.anime}
          character={data.character}
          quote={data.quote}
          poster={poster}
          loadQuote={loadQuote}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default QuoteCard;
