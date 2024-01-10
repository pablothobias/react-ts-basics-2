import { useRef } from 'react';

import Button from './components/Button';
import Input from './components/Input';
import Form from './components/Form';
import { type FormHandleType } from './components/Form/Form';

import './App.css';

function App() {
  const inputNameRef = useRef(null);
  const inputAgeRef = useRef(null);
  const customForm = useRef<FormHandleType>(null);

  const onSave = (data: unknown) => {
    const extractedData = data as { name: string; age: number };
    console.log(extractedData);
    customForm.current?.clear();
  };

  return (
    <>
      <Form onSave={onSave} ref={customForm}>
        <Input id='name' type='text' label='Your Name: ' ref={inputNameRef} />
        <Input id='age' type='number' label='Your Age: ' ref={inputAgeRef} />
        <p>
          <Button text="Save" el='button' type='submit'></Button>
        </p>
      </Form>
    </>
  );
}

export default App;
