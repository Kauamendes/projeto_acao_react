import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
      </Routes>
    </Router>
  );
};

export default App;
