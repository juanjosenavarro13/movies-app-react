import { useState } from 'react';
import { useMovieList } from '../../fetch/movieList';
import { CardMovie } from '../components';
import Pagination from '../components/pagination/pagination';
import Search from '../components/search/search';
import './home.css';

export default function HomePage() {
  const [actualPage, setActualPage] = useState<number>(1);
  const [actualTitle, setActualTitle] = useState<string>('harry potter');

  const { data, isLoading, isError } = useMovieList({
    page: actualPage,
    title: actualTitle,
  });

  const handleSearch = (title: string) => {
    setActualPage(1);
    setActualTitle(title);
  };

  return (
    <>
      <Search value={actualTitle} onSearch={handleSearch} />
      <div className="home_container">
        {!isLoading && isError && (
          <p>Ha ocurrido un error, intenta buscar otro titulo</p>
        )}
        {isLoading && <p>Cargando</p>}
        {!isLoading && !isError && data && (
          <>
            {data.Search.map((movie) => (
              <CardMovie key={movie.imdbID} movie={movie} />
            ))}
          </>
        )}
      </div>
      {!isLoading && !isError && data && (
        <Pagination
          actualPage={actualPage}
          onChangePage={setActualPage}
          totalResults={data.totalResults}
        />
      )}
    </>
  );
}
