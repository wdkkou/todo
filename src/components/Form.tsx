import React, {FC, SyntheticEvent} from 'react';
import {Button, Form} from 'semantic-ui-react';
import './Form.css';

interface FormProps {
  // create: (t: string, d: string) => void;
  create: (e: SyntheticEvent) => void;
  title?: string;
  description?: string;
}
const FormTemplate: FC<FormProps> = ({
  create,
  title = '',
  description = '',
}) => {
  return (
    <Form className="form-board">
      <Form.Field>
        <label className="todo-title">todo title</label>
        <input name="title" placeholder="reactの勉強" />
      </Form.Field>
      <Form.Field>
        <textarea name="desc" placeholder="詳細" />
      </Form.Field>
      {/* e.targetとかやったけどわからん */}
      <Form.Button type="submit" onClick={e => create(e)}>
        create
      </Form.Button>
    </Form>
  );
};

export default FormTemplate;
