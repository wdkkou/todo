import React, {FC} from 'react';
//import {Table, Label, Menu, Icon} from 'semantic-ui-react';
import Table from './Tabletemplate';

export interface Todo {
  id: number;
  title: string;
  description?: string;
}
interface TodoListProps {
  todos: Todo[];
}

const Todolist: FC<TodoListProps> = todos => (
  <>
    <Table />
  </>
);
