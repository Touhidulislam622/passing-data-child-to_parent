import './App.css';

import Parent from './Components/Parents';

function App() { 
  const data = "i am from parents data printed by child components ";
  
  const  handleChildData = (childData) => {
    console.log(childData);
  };
  
  return (
    <div className="App">
        <Parent data = {data} onChildData = {handleChildData} />
    </div>
  );
}

export default App;
