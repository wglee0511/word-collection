import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Main from "./components/Main";
import Add from "./components/Add";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import Navigation from "./components/Navigation";
import theme from "./theme";

function App(props) {
  return (
    <Wrapper className="App">
      <MainDiv>
        <NavDiv>
          <Navigation />
        </NavDiv>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/detail/:index" component={Detail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
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

export default App;
