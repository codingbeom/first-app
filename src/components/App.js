import React, { useState } from "react";
import theme from "theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "globalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Quiz, Landing, Result, Loading } from "pages";
import { quiz } from "contents";
import { Helmet } from "react-helmet";
import favicon from "assets/images/favicon.ico";

function App() {
  const [score, setScore] = useState(0);
  const conScore = Math.floor((score / quiz.length) * 100);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>작은 퀴즈(일론머스크)</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <GlobalStyle />
      <Router>
        <Route path="/result/:cCode">
          <Result conScore={conScore} setScore={setScore} />
        </Route>

        <Route path="/loading">
          <Loading conScore={conScore} />
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
