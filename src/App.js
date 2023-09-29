import { createContext, useState } from 'react';
import './App.css';
import   LeftSide  from './Components/leftSide/leftSide.jsx'
import RightSide from './Components/rightSide/RightSide';
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import FirebaseData from './Components/firebaseData';


export const AppContext = createContext(null)
function App() {
  return (
    <div className="App">
      <Router>
     <Home />
      </Router>
    </div>
  );
}

function Home(){
  let [ data , setData ] = useState([''])
  return (
    <div className='Home' > 
    <AppContext.Provider  value={{data , setData}}>
      <LeftSide />
      <RightSide />
      <FirebaseData />
    </AppContext.Provider>
    </div>
  )
}

export default App;
