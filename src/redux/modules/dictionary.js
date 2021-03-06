import { createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../firebase";

// dbsetup

const firestoreDB = firestore.collection("dictionary");

// Actions

const initState = {
  list: [
    {
      word: "Hello",
      description: "안녕하세요",
      example: "사전을 등록해 주세요",
    },
  ],
  isLoaded: false,
};

const dictionary = createSlice({
  name: "dictionary",
  initialState: initState,
  reducers: {
    actionLoad: (state, action) => {
      if (action.payload.length > 0) {
        return { list: [...action.payload], isLoaded: true };
      }
      return { ...state, isLoaded: true };
    },
    actionCreate: (state, action) => {
      const newDict = [action.payload, ...state.list];
      return { list: [...newDict], isLoaded: true };
    },
    actionUpload: (state, action) => {
      const newDict = state.list.map((each, index) => {
        if (index === parseInt(action.payload.index)) {
          return action.payload.dictionary;
        }
        return each;
      });
      return { list: [...newDict], isLoaded: true };
    },
    actionDelete: (state, action) => {
      const newDict = state.list.filter((each, index) => {
        return index !== parseInt(action.payload);
      });
      return { list: [...newDict], isLoaded: true };
    },
    actionIsloaded: (state, action) => {
      return { list: [...state.list], isLoaded: action.payloads };
    },
  },
});

//firestore middleware action

export const actionLoadForFirestore = () => {
  return async function (dispatch) {
    let newDictionary = [];

    const getDictionary = await firestoreDB.get();
    getDictionary.forEach((doc) => {
      if (doc.exists) {
        newDictionary = [{ id: doc.id, ...doc.data() }, ...newDictionary];
      }
    });
    dispatch(actionLoad(newDictionary));
  };
};

export const actionCreateForFirestore = (dictionary) => {
  return async function (dispatch) {
    try {
      dispatch(actionIsloaded(false));
      const addToFirestore = await firestoreDB.add(dictionary);
      const firestoreId = addToFirestore.id;
      const createDictionary = { id: firestoreId, ...dictionary };
      dispatch(actionCreate(createDictionary));
      dispatch(actionIsloaded(false));
    } catch (error) {
      console.error(error);
    }
  };
};

export const actionUploadForFirestore = (index, dictionary) => {
  return async function (dispatch, getState) {
    dispatch(actionIsloaded(false));
    const targetArr = getState().dictionary.list[index];
    const targetId = targetArr.id;
    const newTarget = { id: targetId, ...dictionary };
    await firestoreDB.doc(targetId).update(newTarget);
    const payload = {
      index,
      dictionary,
    };

    dispatch(actionUpload(payload));
    dispatch(actionIsloaded(false));
  };
};

export const actionDeleteForFirestore = (index) => {
  return async function (dispatch, getState) {
    dispatch(actionIsloaded(false));
    const targetId = getState().dictionary.list[index].id;
    await firestoreDB.doc(targetId).delete();
    dispatch(actionDelete(index));
    dispatch(actionIsloaded(false));
  };
};

export const {
  actionLoad,
  actionCreate,
  actionUpload,
  actionDelete,
  actionIsloaded,
} = dictionary.actions;

export default dictionary;
