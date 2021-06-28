import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Note = (props) => {
  const dictionary = props.dictionary;

  return (
    <NoteWrapper>
      <MarkWordDiv>🔴 Word :</MarkWordDiv>
      <WordDiv>{dictionary.word}</WordDiv>
      <MarkWordDiv>🟢 Description :</MarkWordDiv>
      <WordDiv>{dictionary.description}</WordDiv>
      <MarkWordDiv>🔵 Example : </MarkWordDiv>
      <WordDiv>{dictionary.example}</WordDiv>
    </NoteWrapper>
  );
};

const NoteWrapper = styled.div`
  height: 300px;
  font-weight: 600;
  margin: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${theme.borderColor};
`;
const MarkWordDiv = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  color: ${theme.placeholerColor};
  display: flex;
`;

const WordDiv = styled.div`
  background-color: ${theme.noteColor};
  font-size: 20px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px 5px 15px;
  border-radius: 10px;
`;

export default Note;
