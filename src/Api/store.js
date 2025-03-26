import { createStore, combineReducers } from "redux";
import { accountReducer } from "../Reducers/AddAccountReducer";
import { AddCandidateReducer } from "../Reducers/AddCandidatesReducer";
import { ChangeStateReducer } from "../Reducers/ChangeStateReducers";
import { GradBVAReducer } from "../Reducers/GradBVAReducer";
import { winnerReducer } from "../Reducers/WinnerReducer";
const combined = combineReducers({
  candidates: AddCandidateReducer,
  changeState: ChangeStateReducer,
  GradBVA: GradBVAReducer,
  account:accountReducer,
  winnerData:winnerReducer
});
export const store = createStore(combined);
