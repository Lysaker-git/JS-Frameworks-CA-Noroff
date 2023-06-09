import { GlobalStyles } from "./components/ui/styles/global.styles";
import { ThemeProvider } from "styled-components";
import Head from "./components/ui/head";
import MyRoutes from "./components/ui/Routes";
import { theme } from "./components/ui/styles/theme.styles";

export default function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Head />
        <GlobalStyles />
        <MyRoutes />
      </ThemeProvider>
    </>
  );
}

