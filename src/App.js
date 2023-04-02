import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Candidates from "./components/candidates/Candidates";
import CanditatesReport from "./components/candidates/CanditatesReport";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Candidates />}></Route>
        <Route path="/reports/:candId" element={<CanditatesReport  />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;