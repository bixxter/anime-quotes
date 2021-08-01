import { FC } from "react";
import QuoteCard from "./components/QuoteCard";
import "./scss/Index.scss";
const App: FC = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Anime quotes🍃</h1>
      </header>
      <main>
        <QuoteCard />
      </main>
      <footer>
        <p>
          with ❤️ by{" "}
          <a href="https://github.com/bixxter" target="_blank" rel="noreferrer">
            bixxter
          </a>{" "}
          2021
        </p>
        <p>
          quotes api by:
          <a
            href="https://github.com/rocktimsaikia/anime-chan"
            target="_blank"
            rel="noreferrer"
          >
            Rocktim Saikia
          </a>
        </p>
        <p>
          anime discovery platform:
          <a
            href="https://kitsu.docs.apiary.io"
            target="_blank"
            rel="noreferrer"
          >
            Kitsu API
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
