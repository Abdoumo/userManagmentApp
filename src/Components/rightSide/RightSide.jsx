import React, { useContext, useEffect } from 'react';
import { Route , Routes } from 'react-router';
import { collection, doc, setDoc , getDoc, getDocs} from "firebase/firestore"; 
import { UpdateUser, CreateUser } from '../CRUD';
import { BlsGlobal, Canada, TlsContact, Vfs } from './CountriesWebsites';
import { AppContext } from '../../App';
import AllCountries from './CountriesWebsites/AllCountries/AllCountries';
import Autre from './CountriesWebsites/Autre/Autre';



const RightSide = () => {

    useEffect(() => {
        // CreateUser()
    }, [])
    const { data } = useContext(AppContext)


    return (
    <div id='rightSide' style={{margin: '25px'}} >
        <Routes>
          <Route  path='/' index element={<BlsGlobal  data={data} />} />
          <Route  path='/bls'  index element={<BlsGlobal  data={data} />} />
          <Route  path='/CreateUser' element={<CreateUser />} />
          <Route  path='/updateuser' element={<UpdateUser />} />
          <Route  path='/canada' element={<Canada   data={data} />} />
          <Route  path='/vfs'  element={<Vfs  data={data} />} />
          <Route  path='/TLS' element={<TlsContact   data={data} />} />
          
          {
        Object.keys(data).map((ele, key) => {
          if (!['CANADA', 'TLS', 'VFS', 'BLS'].includes(ele)){
            return <Route key={key} path={`/${ele}`} element={<Autre ADDed={ele}  data={data} />} />
          }
        })
      }
          <Route  path='/*' element={<AllCountries   data={data} />} />
          
        </Routes>
      {/* <CreateUser /> */}
      {/*  */}
    </div>
  )
}

export default RightSide
