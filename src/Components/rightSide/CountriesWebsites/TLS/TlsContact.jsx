import React, { useContext, useEffect } from 'react'
import TableComponent from '../../table'
import { Button } from 'antd';
import { useNavigate } from 'react-router';

const TlsContact = ({data}) => {
  const navigate = useNavigate()
    useEffect(() => {
    
  }, [data])
  return (
    <div>
      <Button type="primary" className='ADDUSER' onClick={() => navigate(`/CreateUser`, {state : {country: 'TLS'}})} style={{margin: '25px'}} size={'large'}> Ajouter un utulisateur </Button>
      {
        data['TLS'] && (
          <TableComponent country='TLS' />
        )
      }
    </div>
  )
}

export default TlsContact
