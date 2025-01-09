import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./singleComicPage.scss";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const SingleCharPage = () => {
  const { charId } = useParams();

  const [char, setChar] = useState(null);
  const { loading, error, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [charId]);

  const updateChar = () => {
    if (!charId) {
      return;
    }

    clearError();
    getCharacter(charId).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

function View({ char }) {
  const { name, description, thumbnail } = char;

  return (
    <>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="single-comic">
        <img src={thumbnail} alt={name} className="single-comic__img" />
        <div className="single-comic__info">
          <h2 className="single-comic__name">{name}</h2>
          <p className="single-comic__descr">{description}</p>
        </div>
        <Link to="/" className="single-comic__back">
          Back to all
        </Link>
      </div>
    </>
  );
}
export default SingleCharPage;
