import React, { useState } from "react";
import theme from "theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "globalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Quiz, Landing, Result, Loading } from "pages";
import { quiz } from "contents";
import { Helmet } from "react-helmet";
import favicon from "assets/images/favicon.ico";
import elon from "assets/images/elon.jpg";

function App() {
  const [score, setScore] = useState(0);

  const conScore = Math.floor((score / quiz.length) * 100);
  const currentUrl = document.location.href;

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>작은 퀴즈(일론머스크)</title>
        <link rel="icon" href={favicon} />
        <meta property="og:url" content={currentUrl} />
        <meta
          property="og:description"
          content="나는 일론 머스크에 대해서 얼마나 알고 있을까?"
        />
        <meta property="og:image" content={elon} />
        <meta name="twitter:title" content="일론 머스크 지수 테스트하기" />
        <meta
          name="twitter:description"
          content="나는 일론 머스크에 대해서 얼마나 알고 있을까?"
        />
        <meta name="twitter:image" content={elon} />
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
