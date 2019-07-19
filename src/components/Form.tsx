import React, { FC, SyntheticEvent, useState } from 'react';
import { Form } from 'semantic-ui-react';
import './Form.css';

interface FormProps {
  text?: string;
  description?: string;
  add?: (text: string, description: string) => void;
}

const FormTodo: FC<FormProps> = ({
  text = '',
  description = '',
  add = () => {},
}) => {
  const [Title, setTitle] = useState(text);
  const [Description, setDescription] = useState(description);
  // inputに入力が行われた際にstateを変更する関数
  const changeInput = (e: SyntheticEvent) => {
    setTitle((e.target as HTMLInputElement).value);
  };
  // textareaに入力が行われた際にstateを変更する関数
  const changeTextArea = (e: SyntheticEvent) => {
    setDescription((e.target as HTMLInputElement).value);
  };

  return (
    <Form className="form-board" onSubmit={() => add(Title, Description)}>
      <Form.Field>
        <input
          name="title"
          placeholder="タイトル"
          onChange={e => changeInput(e)}
        />
      </Form.Field>
      <Form.Field>
        <textarea
          name="desc"
          placeholder="詳細"
          onChange={e => changeTextArea(e)}
        />
      </Form.Field>
      <Form.Button content="Add Todo" />
    </Form>
  );
};
export default FormTodo;
