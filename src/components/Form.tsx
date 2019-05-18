import React, {FC} from 'react';
import {Button, Form} from 'semantic-ui-react';
import './Form.css';

const FormTemplate: FC = () => {
  return (
    <Form className="form-board">
      <Form.Field>
        <label>Title</label>
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
