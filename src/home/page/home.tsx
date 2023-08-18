import { useState } from 'react';
import { useMovieList } from '../../fetch/movieList';
import { CardMovie } from '../components';
import './home.css';

export default function HomePage() {
  const [actualPage, setActualPage] = useState<number>(1);
  const { data, isLoading, isError } = useMovieList({ page: actualPage });

  return (
    <div className="home_container">
      {!isLoading && isError && <p>Ha ocurrido un error</p>}
      {isLoading && <p>Cargando</p>}
      {!isLoading && !isError && data && (
        <>
          {data.Search.map((movie) => (
            <CardMovie key={movie.imdbID} movie={movie} />
          ))}
        </>
      )}
    </div>
  );
}
