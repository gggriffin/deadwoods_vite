import "../App.css";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { FullWidthContainer } from "./FullWidthContainer";
import { Header } from "./Header";
import { NavBar } from "./NavBar";

export const Layout = () => {
  return (
    <FullWidthContainer>
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </FullWidthContainer>
  );
};
