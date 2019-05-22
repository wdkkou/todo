import React, {FC} from 'react';
import {Table, Label} from 'semantic-ui-react';
//import Table from './Tabletemplate';
import './Table.css';

export interface Todo {
  id: number;
  title: string;
  description?: string;
}
interface TodoListProps {
  todos: Todo[];
}

const Todolist: FC<TodoListProps> = ({todos}) => (
  <>
    <Table celled className="table-board">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {todos.map(todo => (
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Label>{todo.title}</Label>
            </Table.Cell>
            <Table.Cell>{todo.description}</Table.Cell>
          </Table.Row>
          <Table.Row />
          <Table.Row />
        </Table.Body>
      ))}
    </Table>
  </>
);

export default Todolist;
