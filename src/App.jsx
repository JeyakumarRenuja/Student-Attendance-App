import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AttendencePage from "./Pages/AttendencePage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/AttendencePage" element={<AttendencePage />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
  );
}

export default App;
