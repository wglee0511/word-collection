import React from "react";
import styled from "styled-components";
import theme from "../theme";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const Note = (props) => {
  const dictionary = props.dictionary;

  return (
    <NoteWrapper>
      <MarkWordDiv>
        <CheckBoxIcon /> Word :
      </MarkWordDiv>
      <WordDiv>{dictionary.word}</WordDiv>
      <MarkWordDiv>
        <CheckBoxIcon /> Description :
      </MarkWordDiv>
      <WordDiv>{dictionary.description}</WordDiv>
      <MarkWordDiv>
        <CheckBoxIcon /> Example :
      </MarkWordDiv>
      <WordDiv>{dictionary.example}</WordDiv>
    </NoteWrapper>
  );
};

const NoteWrapper = styled.div`
  height: 330px;
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
  align-items: center;
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
