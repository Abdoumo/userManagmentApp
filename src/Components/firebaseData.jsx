import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';

const FirebaseData = () => {
    const { setData, data, userLogin } = useContext(AppContext)
    const starCountRef = ref(db);
    useEffect(() => {
      var emailCount = userLogin?.email?.replace('.', '_')
        onValue(starCountRef, (snapshot) => {
        const dataResult = snapshot.val();
        setData(dataResult[`${emailCount}`])
        localStorage.setItem('myData', JSON.stringify(dataResult[`${emailCount}`]));
        
        
    });
      
    }, [db, userLogin])
    
    
    
  return (
    <div>
      
    </div>
  )
}

export default FirebaseData
