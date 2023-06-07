import Banner from "./components/banner";
import TrailerContainer from "./components/trailerContainer";
import "./App.css"
import { Routes,Route } from "react-router-dom"
import {Home} from "./pages/home"
import Header from "./components/header";
import {SeriesPage} from "./pages/series"
import {MoviesPage} from "./pages/movies"


// import bg from "./images/poster1.jpg"

function App() {
  return (
      <>
       <Header />
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/series" element={<SeriesPage />} />
                <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </>
      
    
  );
}

export default App;
 {/* <Header />
       <Banner />
       <TrailerContainer /> */}