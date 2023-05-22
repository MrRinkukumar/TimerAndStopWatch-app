import "./App.css";
import AppRoutes from "./AppRoutes";
import { Navbar } from "./components";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
      </div>
    </>
  );
};

export default App;
