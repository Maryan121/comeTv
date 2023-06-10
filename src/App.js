import "./App.css"
import { Routes,Route, BrowserRouter } from "react-router-dom"
import {Home} from "./pages/home"
import Header from "./components/header";
// import {SeriesPage} from "./pages/series"
import { SeriesPage } from "./pages/series";
import {MoviesPage} from "./pages/movies"
import Watch from "./pages/watch";


function App() {
  return (
      <>
      <BrowserRouter>
          <Header />
          <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/series" element={<SeriesPage />} />
                  <Route path="/movies" element={<MoviesPage />} />
                  <Route path="/watch" element={<Watch />} />
          </Routes>
        </BrowserRouter>
      </>
      
    
  );
}

export default App;
