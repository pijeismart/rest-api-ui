import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { CountriesProvider } from "./context/CountriesContext";
import { ModeProvider } from "./context/ModeContext";

const App = () => {
  return (
    <>
      <CountriesProvider>
        <ModeProvider>
          <Navbar />
          <Main />
          <Footer/>
        </ModeProvider>
      </CountriesProvider>
    </>
  );
};

export default App;
