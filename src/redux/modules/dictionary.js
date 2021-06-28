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

export const actionUpload = (index) => {
  return {
    type: UPLOAD,
    index,
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
      return state;
    }
    case DELETE: {
      return state;
    }
    default: {
      return state;
    }
  }
}
