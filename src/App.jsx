import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Movies from "./Movies";

function App() {
  return (
    <BrowserRouter basename="/demo-movies">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="*" element={<Navigate to="/" />} />{" "}
        {/* Garante fallback */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
