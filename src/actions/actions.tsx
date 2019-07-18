export enum TodoActionType {
  ADD = 'TODO/ADD',
  DELETE = 'TODO/DELETE',
}

export interface TodoAction {
  type: TodoActionType;
  text?: string;
  id?: number;
}
let todoId = 0;
export const add = (text: string): TodoAction => ({
  type: TodoActionType.ADD,
  id: todoId++,
  text,
});

export const dele = (id: number): TodoAction => ({
  type: TodoActionType.DELETE,
  id,
});
