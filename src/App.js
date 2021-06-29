import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Main from "./components/Main";
import Add from "./components/Add";
import Detail from "./components/Detail";
import Navigation from "./components/Navigation";
import theme from "./theme";
import MetaScript from "./components/MetaScript";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionLoadForFirestore } from "./redux/modules/dictionary";
import { Grid } from "react-spinners-css";

function App(props) {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.dictionary.isLoaded);
  const buttonColor = theme.buttonColor;

  useEffect(() => {
    dispatch(actionLoadForFirestore());
  }, [isLoaded]);

  return (
    <Wrapper className="App">
      <MetaScript />
      <MainDiv>
        <NavDiv>
          <Navigation />
        </NavDiv>

        <Switch>
          <Route exact path="/">
            {isLoaded ? (
              <Main />
            ) : (
              <LoaderWrapper>
                <Grid color={buttonColor} style={{ margin: "0 0 20px 0" }} />
                2초이상 지속될 경우 단어를 추가해주세요.
              </LoaderWrapper>
            )}
          </Route>
          <Route exact path="/add" component={Add} />
          <Route exact path="/detail/:index" component={Detail} />
          <Redirect from="*" to="/" />
        </Switch>
      </MainDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.bgColor};
  color: ${theme.fontColor};
  display: flex;
  justify-content: center;
`;

const MainDiv = styled.div`
  width: 600px;
  border: 1px solid ${theme.borderColor};
`;

const NavDiv = styled.div`
  position: sticky;
  height: 60px;
  top: -0.1px;
  border-bottom: 1px solid ${theme.borderColor};
  font-weight: 600;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 17px 0 17px;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 80vh;
  background-color: ${theme.bgColor};
  color: ${theme.fontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
`;

export default App;
