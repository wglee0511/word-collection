import styled from "styled-components";
import Note from "./Note";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import theme from "../theme";

const Main = (props) => {
  const [dictionary, setDictionary] = useState([]);
  const dictionaryList = useSelector((state) => state.dictionary.list);

  useEffect(() => {
    setDictionary([...dictionaryList]);
  }, [dictionaryList]);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
      {dictionary.map((each, index) => {
        return <Note dictionary={each} key={index} index={index} />;
      })}
      <BottomDiv>
        <Upbutton onClick={handleButtonClick}>
          <ArrowUpwardIcon fontSize="large" />
        </Upbutton>
      </BottomDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const BottomDiv = styled.div`
  position: fixed;
  height: 60px;
  right: 200px;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
`;

const Upbutton = styled.button`
  background-color: ${theme.bgColor};
  color: ${theme.buttonColor};
  font-size: 30px;
  height: 50px;
  width: 50px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 15px 5px 15px;
  border-radius: 20px;
  border: 4px solid ${theme.buttonColor};
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    border: 4px solid ${theme.fontColor};
    color: ${theme.fontColor};
  }
`;

export default Main;
