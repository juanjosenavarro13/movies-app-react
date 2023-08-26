import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import HomePage from './home/page/home';
import NoPage from './noPage/page/noPage';
import MoviePage from './movie/page/movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movie/:id" element={<MoviePage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
