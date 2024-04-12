import React, { useContext, useEffect } from 'react';
import { Route , Routes } from 'react-router';
import { collection, doc, setDoc , getDoc, getDocs} from "firebase/firestore"; 
import { UpdateUser, CreateUser } from '../CRUD';
import { AppGlobal } from './CountriesWebsites';
import { AppContext } from '../../App';
import AllCountries from './CountriesWebsites/AllCountries/AllCountries';
import Autre from './CountriesWebsites/Autre/Autre';
import Error404 from './CountriesWebsites/Autre/Error404';



const RightSide = () => {

    useEffect(() => {
        // CreateUser()
    }, [])
    const { data } = useContext(AppContext)


  return (
    <div id='rightSide' style={{margin: '25px'}} >
        <Routes>
          <Route  path='/' index element={<AppGlobal  data={data} />} />
          <Route  path='/CreateUser' element={<CreateUser />} />
          <Route  path='/updateuser' element={<UpdateUser />} />
          <Route  path='/404' element={<Error404 />} />
          {Object.keys(data)?.map((ele, key) => (
              <Route key={key} path={`/${ele}`} element={<Autre ADDed={ele}  data={data} />} />
          ))}
          <Route 
            path={'/*'} 
            element={(<AllCountries data={data} />)} 
          />
        </Routes>
    </div>
);

}

export default RightSide
