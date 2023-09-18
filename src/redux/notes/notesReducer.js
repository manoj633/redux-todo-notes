import { ADD_NOTE, REMOVE_NOTE } from "./notesTypes";

const initialState = {
  notes: [
    {
      id: undefined,
      title: "",
      status: "",
    },
  ],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      console.log(action.payload);
      return { ...state };
    case REMOVE_NOTE:
      console.log(action.payload);
      return { ...state };
    default:
      return state;
  }
};

export default notesReducer;
