import { Reducer } from 'redux';
import { TodoAction, TodoActionType } from './actions/actions';

export interface TodoState {
  id?: number;
  text?: string;
}
// export interface TodosState {
//   todos: TodoState[];
// }
export const initialState: TodoState = {
  id: 0,
  text: 'Learn redux',
};

const todoReducer: Reducer<TodoState[], TodoAction> = (
  state: TodoState[] = [],
  action: TodoAction,
): TodoState[] => {
  switch (action.type) {
    case TodoActionType.ADD:
      // state.push({ id: action.id, text: action.text });

      // return [...state];
      return [...state, { id: action.id, text: action.text }];
    case TodoActionType.DELETE:
      state.splice(action.id || 0, 1);

      return [...state];
    default: {
      return state;
    }
  }
};

export default todoReducer;
