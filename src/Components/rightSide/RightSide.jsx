import React, { useContext, useEffect } from 'react';
import { Route , Routes } from 'react-router';
import { collection, doc, setDoc , getDoc, getDocs} from "firebase/firestore"; 
import { UpdateUser, CreateUser } from '../CRUD';
import { BlsGlobal, Canada, TlsContact, Vfs } from './CountriesWebsites';
import { AppContext } from '../../App';



const RightSide = () => {

    useEffect(() => {
        // CreateUser()
    }, [])
    const { data } = useContext(AppContext)
    console.log(data, 'rrr')
    return (
    <div id='rightSide' >
        <Routes>
          <Route  path='/' index element={<BlsGlobal  data={data} />} />
          <Route  path='/bls'  index element={<BlsGlobal  data={data} />} />
          <Route  path='/CreateUser' element={<CreateUser />} />
          <Route  path='/canada' element={<Canada   data={data} />} />
          <Route  path='/vfs'  element={<Vfs  data={data} />} />
          <Route  path='/TLS' element={<TlsContact   data={data} />} />
          
        </Routes>
      {/* <CreateUser /> */}
      {/*  */}
    </div>
  )
}

export default RightSide
