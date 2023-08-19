import { useEffect, useState } from 'react';
import { appConstants } from '../shared/constants/app.constant';
import { Response } from './movieList.d';

export interface Props {
  page: number;
  title: string;
}

export function useMovieList(props: Props) {
  const { page, title } = props;
  const normalizeTitle = title.trim().replace(/\s+/g, ' ').replace(' ', '+');
  const url: string =
    appConstants.api_uri + `&s=${normalizeTitle}&plot=short&page=${page}`;
  const [data, setData] = useState<Response>();
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

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
