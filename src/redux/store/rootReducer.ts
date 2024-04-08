import {combineReducers, ReducersMapObject} from 'redux';
import {userReducer} from "@redux/slices/userSlice";
import {RootState} from "@models/dataModel";

const reducerMap: ReducersMapObject<RootState> = {
  user: userReducer,
};
export const rootReducer = combineReducers(reducerMap);
