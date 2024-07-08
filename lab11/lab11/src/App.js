import './App.css';
import Person from './Person';
import Work from './Work';

function App(props) {
  let { author, biografy, work, review } = props.data;
  return (
    <div className="App">
      <Person author={author} biografy={biografy}/>
      <Work work={work} review={review}/>
    </div>
  );
}

export default App;