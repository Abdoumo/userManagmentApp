import { createContext, useEffect, useState } from 'react';
import './App.css';
import   LeftSide  from './Components/leftSide/leftSide.jsx'
import RightSide from './Components/rightSide/RightSide';
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import FirebaseData from './Components/firebaseData';
import Login from './Login';


export const AppContext = createContext(null)
function App() {
  let [ data , setData ] = useState( null)
  let [ userLogin , setUserLogin ] = useState(null)
  console.log(userLogin)
  useEffect(() => {
    
  }, [userLogin])
  
  return (
    <div className="App">
      <Router>
        <AppContext.Provider  value={{data , setData, userLogin , setUserLogin }}>
          {
            (userLogin && data) ? (
              <>
             <Home />
             <FirebaseData />
              </>
              

            ) : (
              <>
              <Login />
              <FirebaseData />
              </>

            )
          }
        </AppContext.Provider>
      </Router>
    </div>
  );
}

function Home(){
  let [ data , setData ] = useState([''])
  return (
    <div className='Home' > 
      <LeftSide />
      <RightSide />
      <FirebaseData />
    </div>
  )
}

export default App;
