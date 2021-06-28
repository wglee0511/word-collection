import styled from "styled-components";
import Note from "./Note";
import React from "react";
import { useEffect } from "react";
import { actionLoad } from "../redux/modules/dictionary";
import { connect } from "react-redux";
import { useState } from "react";

const mapStateToProps = (state) => {
  return {
    dictionaryList: state.dictionary.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(actionLoad()),
  };
};

const Main = (props) => {
  const [dictionary, setDictionary] = useState([]);
  useEffect(() => {
    props.load();
    setDictionary([...props.dictionaryList]);
  }, []);

  return (
    <Wrapper>
      {dictionary.map((each, index) => {
        return <Note dictionary={each} key={index} index={index} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default connect(mapStateToProps, mapDispatchToProps)(Main);
