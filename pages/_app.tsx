import { Container, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import AppBar from "../components/AppBar";

import { Suspense } from "react";
import theme from "../contexts/Theme";
import Stepper from "../components/Stepper";
import AlertBar from "../components/AlertBar";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div>Something went wrong</div>}>
      <ThemeProvider theme={theme}>
        <AppBar />
        <Container sx={{ mt: { xs: "72px", sm: "84px" } }}>
          <AlertBar />
          <Stepper />
          <Component {...pageProps} />
        </Container>
        <Footer />
      </ThemeProvider>
    </Suspense>
  );
}
