import { useEffect, useState } from 'react';
import { appConstants } from '../shared/constants/app.constant';
import type { MovieDetail } from './movieList.d';

export interface Props {
  id: string | undefined;
}

export default function useMovieDetail(props: Props) {
  const { id: idMovie } = props;
  const [data, setData] = useState<MovieDetail>();
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const url: string = appConstants.api_uri + `&i=${idMovie}`;

  useEffect(() => {
    setIsloading(true);
    setError(false);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'False') throw new Error(data.Error);
        setData(data);
        setIsloading(false);
      })
      .catch(() => {
        setError(true);
        setIsloading(false);
      });
  }, [url]);

  return { data, isLoading, isError };
}
