export enum TodoActionType {
  ADD = 'TODO/ADD',
  DELETE = 'TODO/DELETE',
}

export interface TodoAction {
  type: TodoActionType;
}
export const add = (): TodoAction => ({ type: TodoActionType.ADD });

export const dele = (): TodoAction => ({ type: TodoActionType.DELETE });
