import { Route, Routes } from "react-router-dom";
// style
import "../src/assets/style/main.scss";
// component
import Header from "./components/Header";
// page
import Home from "./pages/Home";
import Details from "./pages/Details";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
