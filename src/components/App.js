import React, { useState } from "react";
import theme from "../theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalStyle";
import Quiz from "../pages/Quiz";
import Landing from "../pages/landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Result from "../pages/result";

function App() {
  const [score, setScore] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Route path="/result">
          <Result score={score} />
        </Route>
        <Route path="/quiz">
          <Quiz setScore={setScore} />
        </Route>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Router>
    </ThemeProvider>
  );
}

export default App;
