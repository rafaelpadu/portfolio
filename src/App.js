import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/layout/Body";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Theme from "./components/layout/theme";
function App() {
  return (
    <Router>
      <ChakraProvider theme={Theme}>
        <Box width="80%" margin="auto">
          <Header />
          <Body />
          <Footer />
        </Box>
      </ChakraProvider>
    </Router>
  );
}

export default App;
