import React, { useContext, useEffect } from 'react'
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import TableComponent from '../../table';
const BlsGlobal = ({data}) => {
  const navigate = useNavigate()
  // const { data } = useContext(AppContext)
  
  useEffect(() => {
    
  }, [data])
  
// const navigate = useNavigate();
  return (
    <div>
      <Button type="primary" onClick={() => navigate(`/CreateUser`, {state : {country: 'BLS'}})} style={{margin: '25px'}} size={'large'}> Ajouter un utulisateur </Button>
      {
        data['BLS'] && (
          <TableComponent country='BLS' />
        )
      }
    </div>
  )
}

export default BlsGlobal
