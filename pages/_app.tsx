import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import theme from "utils/theme";
import store, { wrapper } from "store";
import { ModalObject, ModalProvider } from "context/ModalContext";
import Hello from "modals/Hello/Hello";
import { SnackbarProvider } from "notistack";
import { CircularProgress } from "@mui/material";
import styles from "styles/Home.module.css";

const allModals: ModalObject[] = [
  {
    name: "Hello",
    component: Hello,
  },
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={5}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            iconVariant={{
              info: <CircularProgress size={15} style={{ color: "white", marginRight: 10 }} />,
            }}
            autoHideDuration={3000}
            classes={{
              variantInfo: styles.infoNotiBar,
            }}
          >
            <ModalProvider allModals={allModals}>
              <Component {...pageProps} />
            </ModalProvider>
          </SnackbarProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);

