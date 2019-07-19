export enum TodoActionType {
  ADD = 'TODO/ADD',
  DELETE = 'TODO/DELETE',
}

export interface TodoAction {
  type: TodoActionType;
  text?: string;
  description?: string;
  id?: number;
}
let todoId = 1;
export const add = (text: string, description: string): TodoAction => ({
  type: TodoActionType.ADD,
  id: todoId++,
  text,
  description,
});

export const dele = (id: number): TodoAction => ({
  type: TodoActionType.DELETE,
  id,
});
