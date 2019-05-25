import React, {FC, useState, SyntheticEvent} from 'react';
import {Button, Form} from 'semantic-ui-react';
import './Form.css';
import {Todo} from './Todolist';

interface FormProps {
  todos: Todo[];
  tiltle?: string;
  description?: string;
  //create?: () => void;
  create?: (e: Event) => void;
  // del?: (i: number) => void;
}
const FormTemplate: FC<FormProps> = ({create, todos}) => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  // const [Todos, setTodos] = useState(todos);
  // const [Title, setTitle] = useState('');
  // const [Description, setDescription] = useState('');
  // const submit = () => {
  //   setTitle('set');
  //   setDescription('description');
  //   const data: Todo = {
  //     id: Todos.length,
  //     title: Title,
  //     description: Description,
  //   };
  //   setTodos([...Todos, data]);
  //   console.log('ok!!');
  // };
  const [Todos, setTodos] = useState(todos);
  const create2 = (e: SyntheticEvent) => {
    //e.preventDefault();
    //console.log((e.target as HTMLInputElement).type);
    setTitle({Title});
    const data: Todo = {
      id: Todos.length + 1,
      title: '',
      description: 'example',
    };
    setTodos(() => [...Todos, data]);
    console.log('create2 ok');
  };
  return (
    <>
      <Form className="form-board" onSubmit={e => create2(e)}>
        <Form.Group>
          <label className="todo-title">todo title</label>
        </Form.Group>
        <Form.Field>
          <Form.Input placeholder="reactの勉強" name="title" value={title} />
        </Form.Field>
        <Form.Field>
          <Form.TextArea name="description" placeholder="詳細" />
        </Form.Field>
        <Form.Button content="create" />
      </Form>
    </>
  );
};

export default FormTemplate;
