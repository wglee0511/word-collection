import styled from "styled-components";
import Note from "./Note";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const Main = (props) => {
  const [dictionary, setDictionary] = useState([]);
  const dictionaryList = useSelector((state) => state.dictionary.list);

  useEffect(() => {
    setDictionary([...dictionaryList]);
  }, [dictionary]);

  return (
    <Wrapper>
      {dictionary.map((each, index) => {
        return <Note dictionary={each} key={index} index={index} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Main;
