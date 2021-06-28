import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import theme from "../theme";

const Navigation = () => {
  const urlName = useHistory().location.pathname;
  const [navName, setNavName] = useState("");

  useEffect(() => {
    if (urlName === "/") {
      setNavName("Home");
    } else {
      setNavName("Data");
    }
  }, []);

  return (
    <>
      <div>{navName}</div>
      <IconDiv>
        <EachLink to="/" navName={navName === "Home"}>
          <HomeIcon />
        </EachLink>
        <EachLink to="/add" navName={navName === "Data"}>
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
  color: ${(props) => (props.navName ? theme.buttonColor : theme.fontColor)};
`;

export default Navigation;
