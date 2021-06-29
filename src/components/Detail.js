import React, { useRef } from "react";
import styled from "styled-components";
import theme from "../theme";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDeleteForFirestore,
  actionUploadForFirestore,
} from "../redux/modules/dictionary";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  // for get text
  const inputWord = useRef();
  const inputDescription = useRef();
  const inputExample = useRef();

  const dispatch = useDispatch();
  const index = useParams().index;
  const dictionaryList = useSelector((state) => state.dictionary.list);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const dictionary = {
      word: inputWord.current.value,
      description: inputDescription.current.value,
      example: inputExample.current.value,
    };
    dispatch(actionUploadForFirestore(index, dictionary));
    props.history.push("/");
  };

  const handleOnDelete = () => {
    const confirmResult = window.confirm("삭제하시겠습니까?");
    if (confirmResult) {
      dispatch(actionDeleteForFirestore(index));
      props.history.push("/");
    }
  };

  return (
    <NoteWrapper onSubmit={handleOnSubmit}>
      <MarkWordDiv>
        <CheckBoxIcon /> Word : {dictionaryList[index].word}
      </MarkWordDiv>
      <WordInput
        type="text"
        ref={inputWord}
        placeholder="단어를 입력해 주세요."
        required
      />
      <MarkWordDiv>
        <CheckBoxIcon /> Description : {dictionaryList[index].description}
      </MarkWordDiv>
      <WordInput
        type="text"
        ref={inputDescription}
        placeholder="단어 설명을 입력해 주세요."
        required
      />
      <MarkWordDiv>
        <CheckBoxIcon /> Example : {dictionaryList[index].example}
      </MarkWordDiv>
      <WordInput
        type="text"
        ref={inputExample}
        placeholder="단어 예시를 입력해 주세요."
        required
      />

      <ButtonDiv>
        <SubmitButton>
          <CloudUploadIcon fontSize="large" />
        </SubmitButton>
        <SubmitButton onClick={handleOnDelete}>
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
