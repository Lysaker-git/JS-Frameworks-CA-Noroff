import { Outlet, Route, Routes } from "react-router";
import HomePage from "./components/ui";
import Cart from "./components/ui/cart";
import FooterComponent from "./components/ui/layout/footer";
import HeaderComponent from "./components/ui/layout/header";
import { GlobalStyles } from "./components/styles/global.styles";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import ProductPage from "./components/ui/productPage";

const theme = {
  color: {
      dark: 'rgb(10, 5, 5)',
      medium: '#130A0A',
      light: 'rgb(169, 180, 194)',
      white: 'rgb(238, 241, 239)',
      accent: 'rgb(234, 144, 16)',
  },
};

function Head () {
  return (
    <Helmet>
      <title>On Hop</title>
      <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
    </Helmet>
  )
}

function Layout() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head />
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:id" element={<ProductPage />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

