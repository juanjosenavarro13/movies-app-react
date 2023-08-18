import { Link } from 'react-router-dom';
import { Movie } from '../../../fetch/movieList.d';
import './cardMovie.css';

interface Props {
  movie: Movie;
}

export function CardMovie(props: Props) {
  const { movie } = props;
  const { Title, Poster, Type, Year, imdbID } = movie;

  return (
    <div className="cardMovie_card" key={imdbID}>
      <img src={Poster} alt="Película 1" />
      <h3>{Title}</h3>
      <p>
        {Year} - {Type}
      </p>
      <Link to={`/${Type}/${imdbID}`}>Ver más</Link>
    </div>
  );
}
