import React, { useRef } from "react";
import styled from "styled-components";
import theme from "../theme";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckIcon from "@material-ui/icons/Check";
import { useDispatch } from "react-redux";
import { actionCreateForFirestore } from "../redux/modules/dictionary";

const Add = (props) => {
  const inputWord = useRef();
  const inputDescription = useRef();
  const inputExample = useRef();
  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const dictionary = {
      word: inputWord.current.value,
      description: inputDescription.current.value,
      example: inputExample.current.value,
    };
    dispatch(actionCreateForFirestore(dictionary));
    props.history.push("/");
  };

  return (
    <NoteWrapper onSubmit={handleOnSubmit}>
      <MarkWordDiv>
        <CheckBoxIcon /> Word :
      </MarkWordDiv>
      <WordInput
        type="text"
        ref={inputWord}
        placeholder="단어를 입력해 주세요."
      />
      <MarkWordDiv>
        <CheckBoxIcon /> Description :
      </MarkWordDiv>
      <WordInput
        type="text"
        ref={inputDescription}
        placeholder="단어 설명을 입력해 주세요."
      />
      <MarkWordDiv>
        <CheckBoxIcon /> Example :
      </MarkWordDiv>
      <WordInput
        type="text"
        ref={inputExample}
        placeholder="단어 예시를 입력해 주세요."
      />
      <SubmitButton>
        <CheckIcon fontSize="large" />
      </SubmitButton>
    </NoteWrapper>
  );
};

const NoteWrapper = styled.form`
  height: 430px;
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

export default Add;
