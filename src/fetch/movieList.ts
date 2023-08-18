import { useEffect, useState } from 'react';
import { appConstants } from '../shared/constants/app.constant';
import { Props, Response } from './movieList.d';

export function useMovieList(props: Props) {
  const { page = 1 } = props;
  const url: string =
    appConstants.api_uri + `&s=harry+potter&plot=short&page=${page}`;
  const [data, setData] = useState<Response>();
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    setIsloading(true);
    setError(false);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsloading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [url]);

  return { data, isLoading, isError };
}
