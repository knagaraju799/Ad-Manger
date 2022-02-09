import { combineReducers } from "redux";
import { alert } from "./alert.reducer";
import { ads } from "./ad.reducer";

const rootReducer = combineReducers({
  ads,
  alert,
});

export default rootReducer;
