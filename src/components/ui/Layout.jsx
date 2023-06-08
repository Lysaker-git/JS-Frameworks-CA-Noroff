import HeaderComponent from "./layout/HeaderComponent";
import FooterComponent from "./layout/FooterComponent";
import { Outlet } from "react-router";
import { SearchProvider } from "../elements/Search";

export default function Layout() {
    return (
      <SearchProvider>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </SearchProvider>
    );
  }