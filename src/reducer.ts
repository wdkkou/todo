import { Reducer } from 'redux';
import { TodoAction, TodoActionType } from './actions/actions';

export interface TodoState {
  id?: number;
  text?: string;
  description?: string;
}
export const initialState: TodoState[] = [
  { id: 0, text: 'Learn redux', description: '実際に利用して開発する' },
];

const todoReducer: Reducer<TodoState[], TodoAction> = (
  state: TodoState[] = initialState,
  action: TodoAction,
): TodoState[] => {
  switch (action.type) {
    case TodoActionType.ADD:
      return [
        ...state,
        { id: action.id, text: action.text, description: action.description },
      ];
    case TodoActionType.DELETE:
      state.splice(action.id || 0, 1);

      return [...state];
    default: {
      return state;
    }
  }
};

export default todoReducer;
