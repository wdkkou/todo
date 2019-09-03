import React, { FC } from 'react';
import { Form, Button } from 'semantic-ui-react';
import './Form.css';

interface FormProps {
  title?: string;
  description?: string;
  add?: (text: string, description: string) => void;
}

const FormTodo: FC<FormProps> = ({ add = () => {} }) => {
  let title: HTMLInputElement | null;
  let description: HTMLTextAreaElement | null;

  return (
    <Form className="form-board">
      <Form.Field>
        <input
          name="title"
          placeholder="タイトル"
          ref={node => {
            title = node;
          }}
        />
      </Form.Field>
      <Form.Field>
        <textarea
          name="desc"
          placeholder="詳細"
          ref={node => {
            description = node;
          }}
        />
      </Form.Field>
      <Button
        className="add-button"
        onClick={() => {
          add(
            title == null ? '' : title.value,
            description == null ? '' : description.value,
          );
          (title =
            title == null
              ? (document.getElementById('id') as HTMLInputElement)
              : title).value = '';
          (description =
            description == null
              ? (document.getElementById('id') as HTMLTextAreaElement)
              : description).value = '';
        }}
      >
        Add
      </Button>
    </Form>
  );
};
export default FormTodo;
