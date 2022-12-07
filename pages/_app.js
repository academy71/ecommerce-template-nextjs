import GlobalStyle from "../styles/GlobalStyles";

const MyApp = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
