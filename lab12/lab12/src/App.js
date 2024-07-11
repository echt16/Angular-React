import React, {useState} from 'react';
import Display from './Display'
import Button from './Button';
import './App.css'


const App = () => {
  const [value, setValue] = useState(0);
  const changeValue = (val) => {
    setValue(value + val);
  };
  return (
    <div className="App">
      <Display value={value}/>
      <div className='buttons'>
        <Button btnVal={-25} changeValue={changeValue}/>
        <Button btnVal={+50} changeValue={changeValue}/>
        <Button btnVal={-75} changeValue={changeValue}/>
        <Button btnVal={+100} changeValue={changeValue}/>
      </div>
    </div>
  );
};

export default App;
