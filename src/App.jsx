import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
