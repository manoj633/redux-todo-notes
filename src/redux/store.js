import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import notesReducer from "./notes/notesReducer";

const store = createStore(notesReducer, composeWithDevTools());

export default store;
