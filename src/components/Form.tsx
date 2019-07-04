import React, { FC, SyntheticEvent, useState } from 'react';
import { Form } from 'semantic-ui-react';
import './Form.css';

interface FormProps {
  create: (title: string, desc: string) => void;
  title?: string;
  desc?: string;
}
const FormTemplate: FC<FormProps> = ({ create, title = '', desc = '' }) => {
  const [Title, setTitle] = useState(title);
  const [Desc, setDesc] = useState(desc);
  // 入力がなされた際にstateを変更する関数（何か嫌だけどしょうがない）
  const changeInput = (e: SyntheticEvent) => {
    setTitle((e.target as HTMLInputElement).value);
  };
  const changeTextarea = (e: SyntheticEvent) => {
    setDesc((e.target as HTMLTextAreaElement).value);
  };

  return (
    <Form className="form-board" onSubmit={() => create(Title, Desc)}>
      <Form.Field>
        {/* <label className="todo-title">todo title</label> */}
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
          onChange={e => changeTextarea(e)}
        />
      </Form.Field>
      {/* e.targetとかやったけどわからん */}
      <Form.Button content="Create" />
    </Form>
  );
};

export default FormTemplate;
