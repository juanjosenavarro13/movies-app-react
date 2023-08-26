import { useNavigate } from 'react-router-dom';
import './noPage.css';

export default function NoPage() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/');
  };

  return (
    <div className="error-container">
      <h1>Error 404</h1>
      <p>
        Lo sentimos, la página que estás buscando no se encuentra disponible.
      </p>
      <button onClick={handleClickBack} className="back-button">
        Volver
      </button>
    </div>
  );
}
