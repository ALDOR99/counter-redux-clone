import { createStore } from "redux";
import { Reducer } from "./index";

//--------------------------------------------------------------------

export default function configureStore() {
  return createStore(reducers);
}
