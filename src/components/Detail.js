import React from "react";
import styled from "styled-components";
import theme from "../theme";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const Detail = (props) => {
  const dictionary = {
    word: "dictionary",
    description: "사전",
    example: "사전을 본다",
  };
  return (
    <NoteWrapper>
      <MarkWordDiv>
        <CheckBoxIcon /> Word : {dictionary.word}
      </MarkWordDiv>
      <WordInput type="text" placeholder="단어를 입력해 주세요." />
      <MarkWordDiv>
        <CheckBoxIcon /> Description : {dictionary.description}
      </MarkWordDiv>
      <WordInput type="text" placeholder="단어 설명을 입력해 주세요." />
      <MarkWordDiv>
        <CheckBoxIcon /> Example : {dictionary.example}
      </MarkWordDiv>
      <WordInput type="text" placeholder="단어 예시를 입력해 주세요." />

      <ButtonDiv>
        <SubmitButton>
          <CloudUploadIcon fontSize="large" />
        </SubmitButton>
        <SubmitButton>
          <DeleteIcon fontSize="large" />
        </SubmitButton>
      </ButtonDiv>
    </NoteWrapper>
  );
};

const NoteWrapper = styled.form`
  height: 550px;
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

const WordInput = styled.input`
  background-color: ${theme.noteColor};
  font-size: 20px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px 5px 15px;
  border-radius: 10px;
  border: none;
  color: ${theme.fontColor};
  :focus {
    color: ${theme.fontColor};
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SubmitButton = styled.button`
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
  border: 2px solid ${theme.buttonColor};
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    border: 2px solid ${theme.fontColor};
    color: ${theme.fontColor};
  }
`;

export default Detail;
