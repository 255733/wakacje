import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./styles/App.css";

import Home from "./pages/Home";
import About_us from "./pages/About_us";
import Contact from "./pages/Contact";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Error404 from "./pages/Error404";
import Quiz from "./pages/Quiz";
import Regulamin from "./pages/Regulamin";
import Opinions from "./pages/Opinions";
import Wiecej_ofert from "./pages/Wiecej_Ofert";
import ScrollToTop from "./componets/ScrollToTop";

import Bulgaria from "./pages/Bulgaria";
import HiszpaniaAli from "./pages/HiszpaniaAli";
import Malediwy from "./pages/Malediwy";
import Turcjastam from "./pages/Turcjastam";
import Sardynia from "./pages/Sardynia";
import Barcelona from "./pages/Barcelona";
import Madryt from "./pages/Madryt";
import Chorwacja from "./pages/Chorwacja";
import Grecjakreta from "./pages/Grecjakreta";
import Alpy from "./pages/Alpy";
import Paryz from "./pages/Paryz";
import Berlin from "./pages/Berlin";
import Tajlandia from "./pages/Tajlandia";
import Tokio from "./pages/Tokio";
import Indie from "./pages/Indie";
import Kenia from "./pages/Kenia";
import Egipt from "./pages/Egipt";
import Maroko from "./pages/Maroko";
import Australia from "./pages/Australia";
import Sydney from "./pages/Sydney";
import Lizbona from "./pages/Lizbona";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Header />
        <main className="content">
          <div className="container" style={{ paddingTop: "2rem" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/o-nas" element={<About_us />} />
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/regulamin" element={<Regulamin />} />
              <Route path="/opinie" element={<Opinions />} />
              <Route path="/oferta" element={<Wiecej_ofert />} />
              <Route path="/oferta/bulgaria" element={<Bulgaria />} />
              <Route path="/oferta/Hiszpania-Alicante" element={<HiszpaniaAli />} />
              <Route path="/oferta/malediwy" element={<Malediwy />} />
              <Route path="/oferta/Turcja-stambul" element={<Turcjastam />} />
              <Route path="/oferta/Sardynia" element={<Sardynia />} />
              <Route path="/oferta/Barcelona" element={<Barcelona />} />
              <Route path="/oferta/Madryt" element={<Madryt />} />
              <Route path="/oferta/Chorcja" element={<Chorwacja />} />
              <Route path="/oferta/Grecja-Kreta" element={<Grecjakreta />} />
              <Route path="/oferta/alpy" element={<Alpy />} />
              <Route path="/oferta/paryz" element={<Paryz />} />
              <Route path="/oferta/berlin" element={<Berlin />} />
              <Route path="/oferta/tajlandia" element={<Tajlandia />} />
              <Route path="/oferta/indie" element={<Indie />} />
              <Route path="/oferta/kenia" element={<Kenia />} />
              <Route path="/oferta/egipt" element={<Egipt />} />
              <Route path="/oferta/maroko" element={<Maroko />} />
              <Route path="/oferta/australia" element={<Australia />} />
              <Route path="/oferta/sydney" element={<Sydney />} />
              <Route path="/oferta/lizbona" element={<Lizbona />} />
              <Route path="/oferta/tokio" element={<Tokio />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
