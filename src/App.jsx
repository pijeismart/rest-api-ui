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
        </ModeProvider>
      </CountriesProvider>
    </>
  );
};

export default App;
