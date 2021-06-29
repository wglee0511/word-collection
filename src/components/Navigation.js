import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import theme from "../theme";

const Navigation = (props) => {
  let urlname = props.location.pathname;

  return (
    <>
      <div>{urlname === "/" ? "Home" : "Input"}</div>
      <IconDiv>
        <EachLink to="/" urlname={urlname === "/" ? "true" : "false"}>
          <HomeIcon fontSize="large" />
        </EachLink>
        <EachLink to="/add" urlname={urlname !== "/" ? "true" : "false"}>
          <AddCircleIcon fontSize="large" />
        </EachLink>
      </IconDiv>
    </>
  );
};

const IconDiv = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EachLink = styled(Link)`
  color: ${(props) =>
    props.urlname === "true" ? theme.buttonColor : theme.fontColor};
`;

export default withRouter(Navigation);
