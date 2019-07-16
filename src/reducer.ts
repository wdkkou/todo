import { Reducer } from 'redux';
import { TodoAction, TodoActionType } from './actions/actions';

export interface TodoState {
  text?: string;
  id?: number;
}
export interface TodosState {
  todos?: TodoState[];
}
export const initialState: TodosState = {
  todos: [{ text: 'Lern redux', id: 0 }],
};

const todoReducer: Reducer<TodosState, TodoAction> = (
  state,
  action,
): TodosState => {
  switch (action.type) {
    case TodoActionType.ADD:
      return {
        ...state,
        todos: [{ text: action.text }],
      };
    case TodoActionType.DELETE:
      return {
        ...state,
        todos: [{ id: action.id }],
        // idのtodoをdelete
      };
    default: {
      return { ...state };
    }
  }
};

export default todoReducer;
