import React, { FC, SyntheticEvent, useState } from 'react';
import { Form } from 'semantic-ui-react';
import './Form.css';
import { TodosState } from '../reducer';

// interface FormProps {
//   create: (title: string, desc: string) => void;
//   title?: string;
//   desc?: string;
// }

// export interface Todo {
//   id?: number;
//   title?: string;
//   description?: string;
// }

interface FormProps {
  text?: string;
  add?: (text: string) => void;
}

const FormTodo: FC<FormProps> = ({ text = '', add = () => {} }) => {
  const [Title, setTitle] = useState(text);
  // inputに入力が行われた際にstateを変更する関数
  const changeInput = (e: SyntheticEvent) => {
    setTitle((e.target as HTMLInputElement).value);
  };

  return (
    <Form className="form-board" onSubmit={() => add(Title)}>
      <Form.Field>
        {/* <label className="todo-title">todo title</label> */}
        <input
          name="title"
          placeholder="タイトル"
          onChange={e => changeInput(e)}
        />
      </Form.Field>
      <Form.Field>
        <textarea name="desc" placeholder="詳細" />
      </Form.Field>
      <Form.Button content="Add Todo" />
    </Form>
  );
};
export default FormTodo;
