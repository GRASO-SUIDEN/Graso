import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Explore from "./pages/explore/Explore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
