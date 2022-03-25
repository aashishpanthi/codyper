import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../Components/Global.styled";
import Header from "../Components/Header/Header";
import Footer from "../Components/styled/Footer/Footer";
import theme from "../theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="appContainer">
        <Header />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Home