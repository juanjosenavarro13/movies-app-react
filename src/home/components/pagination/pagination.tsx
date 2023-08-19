import './pagination.css';

interface Props {
  actualPage: number;
  totalResults: number;
  onChangePage: (page: number) => void;
}

export default function Pagination(props: Props) {
  const { actualPage, onChangePage, totalResults } = props;

  const maxPage = Math.round(totalResults / 10);

  const handleChangePage = (page: number) => {
    onChangePage(page);
  };

  return (
    <div className="pagination">
      {actualPage !== 1 && (
        <button
          type="button"
          onClick={() => {
            handleChangePage(actualPage - 1);
          }}
        >
          &laquo; Anterior
        </button>
      )}
      {actualPage - 2 > 1 && (
        <button
          type="button"
          onClick={() => {
            handleChangePage(actualPage - 2);
          }}
        >
          {actualPage - 2}
        </button>
      )}
      {actualPage - 1 > 1 && (
        <button
          type="button"
          onClick={() => {
            handleChangePage(actualPage - 1);
          }}
        >
          {actualPage - 1}
        </button>
      )}
      <button type="button" className="active">
        {actualPage}
      </button>
      {actualPage + 1 < maxPage && (
        <button
          type="button"
          onClick={() => {
            handleChangePage(actualPage + 1);
          }}
        >
          {actualPage + 1}
        </button>
      )}
      {actualPage + 2 < maxPage && (
        <button
          type="button"
          onClick={() => {
            handleChangePage(actualPage + 2);
          }}
        >
          {actualPage + 2}
        </button>
      )}
      {actualPage + 1 < maxPage && (
        <button
          type="button"
          onClick={() => {
            handleChangePage(actualPage + 1);
          }}
        >
          Siguiente &raquo;
        </button>
      )}
    </div>
  );
}
