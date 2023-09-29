import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';

const FirebaseData = () => {
    const { setData } = useContext(AppContext)
    const starCountRef = ref(db);
    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
        const dataResult = snapshot.val();
        setData(dataResult)
        
    });
      
    }, [db])
    
    
    
  return (
    <div>
      
    </div>
  )
}

export default FirebaseData
