import React, {FC, SyntheticEvent, FormEvent, useState} from 'react';
import {Button, Form} from 'semantic-ui-react';
import './Form.css';

interface FormProps {
  create: (title: string, desc: string) => void;
  // create: (e: FormEvent) => void;
  title?: string;
  desc?: string;
}
const FormTemplate: FC<FormProps> = ({create, title = 'xxx', desc = 'yyy'}) => {
  const [Title, setTitle] = useState(title);
  const [Desc, setDesc] = useState(desc);
  //入力がなされた際にstateを変更する関数（何か嫌）
  const changeInput = (e: SyntheticEvent) => {
    //console.log((e.target as HTMLInputElement).value);
    setTitle((e.target as HTMLInputElement).value);
  };
  const changeTextarea = (e: SyntheticEvent) => {
    //console.log((e.target as HTMLTextAreaElement).value);
    setDesc((e.target as HTMLTextAreaElement).value);
  };
  return (
    //create(string,string)が出来ないのはなぜ？
    <Form className="form-board" onSubmit={() => create(Title, Desc)}>
      <Form.Field>
        <label className="todo-title">todo title</label>
        <input
          name="title"
          placeholder="reactの勉強"
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
