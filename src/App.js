import "./App.css";
import AppRoutes from "./AppRoutes";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
