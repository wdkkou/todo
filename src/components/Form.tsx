import React, {FC} from 'react';
import {Button, Form} from 'semantic-ui-react';

const FormTemplate: FC = () => {
  return (
    <Form>
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
