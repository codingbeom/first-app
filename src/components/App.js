import React from "react";
import theme from "../theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalStyle";
import Quiz from "../pages/Quiz";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Route path="/quiz" component={Quiz} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
