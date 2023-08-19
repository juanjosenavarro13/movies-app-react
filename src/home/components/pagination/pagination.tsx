import './pagination.css';

interface Props {
  actualPage: number;
  onChangePage: (page: number) => void;
}

export default function Pagination(props: Props) {
  const { actualPage, onChangePage } = props;

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
      <button
        type="button"
        onClick={() => {
          handleChangePage(actualPage + 1);
        }}
      >
        {actualPage + 1}
      </button>
      <button
        type="button"
        onClick={() => {
          handleChangePage(actualPage + 2);
        }}
      >
        {actualPage + 2}
      </button>
      <button
        type="button"
        onClick={() => {
          handleChangePage(actualPage + 1);
        }}
      >
        Siguiente &raquo;
      </button>
    </div>
  );
}
