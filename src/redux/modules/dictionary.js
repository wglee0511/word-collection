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

// firestore middleware

// reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case LOAD: {
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
