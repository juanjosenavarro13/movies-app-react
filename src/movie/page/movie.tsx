import { useNavigate, useParams } from 'react-router-dom';
import useMovieDetail from '../../fetch/movieDetail';
import './movie.css';

export default function MoviePage() {
  const { id: idMovie } = useParams();

  const { data, isLoading, isError } = useMovieDetail({ id: idMovie });

  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/');
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data && (
        <div className="pelicula">
          <img src={data.Poster} alt={data.Title} />
          <h1>{data.Title}</h1>
          <p>Fecha de lanzamiento:{data.Released}</p>
          <p>Edad:{data.Rated}</p>
          <p>Duracion:{data.Runtime}</p>
          <p>Género: {data.Genre}</p>
          <p>Director: {data.Director}</p>
          <p>Reparto: {data.Actors}</p>
          <p>Premios: {data.Awards}</p>
          <p>Descripcion:{data.Plot}</p>
          <h2>Ratings:</h2>
          <ul>
            {data.Ratings.map((rt) => {
              return (
                <li key={rt.Source}>
                  {rt.Source}: {rt.Value}
                </li>
              );
            })}
          </ul>
          <button className="back-button" onClick={handleClickBack}>
            Volver
          </button>
        </div>
      )}
    </>
  );
}
