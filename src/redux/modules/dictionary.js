import { firestore } from "../../firebase";

// dbsetup

const firestoreDB = firestore.collection("dictionary");

// Actions

const LOAD = "dictionary/LOAD";

const CREATE = "dictionary/CREATE";

const UPLOAD = "dictionary/UPLOAD";

const DELETE = "dictionary/DELETE";

const LOADER = "dictionary/LOADER";

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

export const actionIsloaded = (isLoaded) => {
  return {
    type: LOADER,
    isLoaded,
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

    dispatch(actionUpload(index, dictionary));
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

// reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case LOAD: {
      if (action.dictionary.length > 0) {
        return { list: [...action.dictionary], isLoaded: true };
      }
      return { ...state, isLoaded: true };
    }
    case CREATE: {
      const newDictionary = [action.dictionary, ...state.list];
      return { list: newDictionary, isLoaded: true };
    }
    case UPLOAD: {
      const newDictionary = state.list.map((each, index) => {
        if (index === parseInt(action.index)) {
          return action.dictionary;
        }
        return each;
      });
      return { list: newDictionary, isLoaded: true };
    }
    case DELETE: {
      const newDictionary = state.list.filter((each, index) => {
        return index !== parseInt(action.index);
      });
      return { list: newDictionary, isLoaded: true };
    }
    case LOADER: {
      return { ...state, isLoaded: action.isLoaded };
    }
    default: {
      return state;
    }
  }
}
