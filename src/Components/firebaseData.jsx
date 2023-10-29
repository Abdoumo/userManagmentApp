import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';

const FirebaseData = () => {
    const { setData, data, userLogin } = useContext(AppContext)
    const starCountRef = ref(db);
    console.log(userLogin?.displayName, 'lllll')
    useEffect(() => {
      var displayName = userLogin?.displayName
        onValue(starCountRef, (snapshot) => {
        const dataResult = snapshot.val();
        // console.log('db', )
        setData(dataResult[`${displayName}`])
        
        
    });
      
    }, [db, userLogin])
    
    
    
  return (
    <div>
      
    </div>
  )
}

export default FirebaseData
