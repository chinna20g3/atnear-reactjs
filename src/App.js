import Home from "./home/layouts/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div >
     <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
