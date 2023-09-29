import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import TableComponent from '../../table';
const BlsGlobal = ({data}) => {
  // const { data } = useContext(AppContext)
  
  useEffect(() => {
    
  }, [data])
  
// const navigate = useNavigate();
  return (
    <div>
      {
        data['BLS'] && (
          <TableComponent country='BLS' />
        )
      }
      bls
      {/* <span onClick={() => navigate("/CreateUser")}>ddddddddddd</span> */}
    </div>
  )
}

export default BlsGlobal
