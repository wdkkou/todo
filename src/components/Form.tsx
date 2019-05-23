import React, {FC} from 'react';
import {Button, Form} from 'semantic-ui-react';
import './Form.css';
import Todolist, {Todo} from './Todolist';

interface FormProps {
  create: () => void;
  dele: () => void;
}
const FormTemplate: FC<FormProps> = ({create, dele}) => {
  return (
    <Form className="form-board">
      <Form.Field>
        <label className="todo-title">todo title</label>
        <input placeholder="reactの勉強" />
      </Form.Field>
      <Form.Field>
        <textarea name="description" placeholder="詳細" />
      </Form.Field>
      <Button type="submit">create</Button>
    </Form>
  );
};

export default FormTemplate;
