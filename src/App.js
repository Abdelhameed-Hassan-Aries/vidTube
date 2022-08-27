import React, { useState } from "react";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { ToastProvider } from "./hooks/useToast";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [userSignedIn, setUserSignedIn] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <ToastProvider>
        <Container>
          <BrowserRouter>
            {userSignedIn && (
              <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
            )}
            <Main>
              {userSignedIn && <Navbar darkMode={darkMode} />}
              <Wrapper>
                <Routes>
                  <Route path="/">
                    <Route
                      index
                      element={<SignIn setUserSignedIn={setUserSignedIn} />}
                    />
                    <Route
                      path="home"
                      element={<Home setUserSignedIn={setUserSignedIn} />}
                    />
                    <Route path="video">
                      <Route
                        path=":id"
                        element={<Video setUserSignedIn={setUserSignedIn} />}
                      />
                    </Route>
                  </Route>
                </Routes>
              </Wrapper>
            </Main>
          </BrowserRouter>
        </Container>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
