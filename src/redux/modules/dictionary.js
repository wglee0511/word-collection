import { firestore } from "../../firebase";

// dbsetup

const firestoreDB = firestore.collection("dictionary");

// Actions

const LOAD = "dictionary/LOAD";

const CREATE = "dictionary/CREATE";

const UPLOAD = "dictionary/UPLOAD";

const DELETE = "dictionary/DELETE";

const initState = {
  list: [
    {
      word: "dictionary",
      description: "사전",
      example: "사전을 본다",
    },
    {
      word: "dictionary",
      description: "사전",
      example: "사전을 본다",
    },
  ],
};

// Action Creator

export const actionLoad = (dictionary) => {
  return {
    type: LOAD,
    dictionary,
  };
};

export const actionCreate = (dictionary) => {
  return {
    type: CREATE,
    dictionary,
  };
};

export const actionUpload = (index, dictionary) => {
  return {
    type: UPLOAD,
    index,
    dictionary,
  };
};

export const actionDelete = (index) => {
  return {
    type: DELETE,
    index,
  };
};

// firestore middleware action

export const actionLoadForFirestore = () => {
  return async function (dispatch) {
    let newDictionary = [];
    const getDictionary = await firestoreDB.get();
    getDictionary.forEach((doc) => {
      if (doc.exists) {
        newDictionary = [{ id: doc.id, ...doc.data() }, ...newDictionary];
      }
    });
    console.log(newDictionary.length);
    dispatch(actionLoad(newDictionary));
  };
};

export const actionCreateForFirestore = (dictionary) => {
  return async function (dispatch) {
    try {
      const addToFirestore = await firestoreDB.add(dictionary);
      const firestoreId = addToFirestore.id;
      const createDictionary = { id: firestoreId, ...dictionary };
      dispatch(actionCreate(createDictionary));
    } catch (error) {
      console.error(error);
    }
  };
};

export const actionUploadForFirestore = (index, dictionary) => {
  return async function (dispatch, getState) {
    const targetArr = getState().dictionary.list[index];
    const targetId = targetArr.id;
    const newTarget = { id: targetId, ...dictionary };
    const getDictionary = await firestoreDB.doc(targetId).update(newTarget);

    dispatch(actionUpload(index, dictionary));
  };
};

export const actionDeleteForFirestore = (index) => {
  return async function (dispatch, getState) {
    const targetId = getState().dictionary.list[index].id;
    const deleteDictionary = await firestoreDB.doc(targetId).delete();
    dispatch(actionDelete(index));
  };
};

// reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case LOAD: {
      if (action.dictionary.length > 0) {
        return { list: [...action.dictionary] };
      }
      return state;
    }
    case CREATE: {
      const newDictionary = [action.dictionary, ...state.list];
      return { list: newDictionary };
    }
    case UPLOAD: {
      const newDictionary = state.list.map((each, index) => {
        if (index === parseInt(action.index)) {
          return action.dictionary;
        }
        return each;
      });
      return { list: newDictionary };
    }
    case DELETE: {
      const newDictionary = state.list.filter((each, index) => {
        return index !== parseInt(action.index);
      });
      return { list: newDictionary };
    }
    default: {
      return state;
    }
  }
}
