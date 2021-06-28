import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import theme from "../theme";

const Navigation = (props) => {
  let urlName = props.location.pathname;
  console.log(urlName);
  return (
    <>
      <div>{urlName === "/" ? "Home" : "Input"}</div>
      <IconDiv>
        <EachLink to="/" urlName={urlName === "/"}>
          <HomeIcon />
        </EachLink>
        <EachLink to="/add" urlName={urlName !== "/"}>
          <AddCircleIcon />
        </EachLink>
      </IconDiv>
    </>
  );
};

const IconDiv = styled.div`
  width: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EachLink = styled(Link)`
  color: ${(props) => (props.urlName ? theme.buttonColor : theme.fontColor)};
`;

export default withRouter(Navigation);
