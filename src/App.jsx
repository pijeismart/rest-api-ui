import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { ModeProvider } from "./context/ModeContext";

const App = () => {
  return (
    <>
      <ModeProvider>
        <Navbar />
        <Main />
      </ModeProvider>
    </>
  );
};

export default App;
