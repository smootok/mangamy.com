import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import theme from "ui/theme";
import GlobalStyles from "ui/theme/global-styles";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
