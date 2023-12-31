import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { Header } from "./components/Header";
import { Menu } from "./pages/Menu/Menu";
import { Footer } from "./components/Footer";

export const Router = () => {
  return (
    <BrowserRouter basename={"/hollys_renewal"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
