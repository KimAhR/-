import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/movie_list/Header";
import Home from "./component/movie_list/page/Home";
import Movie from "./component/movie_list/page/Movie";
import Person from "./component/movie_list/page/Person";
import TV from "./component/movie_list/page/TV";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie" element={<Movie />} />
        <Route path="tv" element={<Person />} />
        <Route path="person" element={<TV />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
