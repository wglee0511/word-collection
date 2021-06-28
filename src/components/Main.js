import styled from "styled-components";
import Note from "./Note";
import React from "react";

const Main = (props) => {
  const dictionary = {
    word: "dictionary",
    description: "사전",
    example: "사전을 본다",
  };
  return (
    <Wrapper>
      <Note dictionary={dictionary} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Main;
