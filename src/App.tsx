import Button from './components/Button';
import Input from './components/Input';

import './App.css';

function App() {
  return (
    <>
      <Input id='name' type='text' label='Your Name' />
      <Input id='age' type='number' label='Your Age' />
      <Button text="Hey I'm a button!" type='button' disabled></Button>
      <Button text="Hey I'm a link!" type='link' href='https://www.google.com'></Button>
    </>
  );
}

export default App;
