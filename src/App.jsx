import Footer from "./components/Footer";
import Main from "./components/Main";
import CountryInfo from "./components/CountryInfo";
import Navbar from "./components/Navbar";
import { CountriesProvider } from "./context/CountriesContext";
import { ModeProvider } from "./context/ModeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <CountriesProvider>
        <ModeProvider>
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/country/:countryName" element={<CountryInfo />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </ModeProvider>
      </CountriesProvider>
    </>
  );
};

export default App;
