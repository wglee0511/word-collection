import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Main from "./components/Main";
import Add from "./components/Add";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import theme from "./theme";

function App(props) {
  return (
    <Wrapper className="App">
      <NavDiv></NavDiv>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/detail/:index" component={Detail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.bgColor};
  color: ${theme.fontColor};
`;

const NavDiv = styled.div``;

const MainDiv = styled.div``;

export default App;
