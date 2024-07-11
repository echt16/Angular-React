import './App.css';
import Cities from './Cities';
import Form from './Form';

function App() {
  const cities = [
    {
      name: 'city1',
      text: 'descr1'
    },
    {
      name: 'city2',
      text: 'descr2'
    },
    {
      name: 'city3',
      text: 'descr3'
    }
  ];
  return (
    <div className="App">
      <Form />
      <br />
      <Cities data={cities}/>
    </div>
  );
}

export default App;
