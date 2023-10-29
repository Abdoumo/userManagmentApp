import React, { useContext, useEffect } from 'react'
import TableComponent from '../../table'
import { Button } from 'antd';
import { useNavigate } from 'react-router';

const Vfs = ({data}) => {
  const navigate = useNavigate()
  useEffect(() => {
    
  }, [data])
  return (
    <div>
      <Button type="primary" onClick={() => navigate(`/CreateUser`, {state : {country: 'VFS'}})} style={{margin: '25px'}} size={'large'}> Ajouter un utulisateur </Button>
      {
      data['VFS'] && (
          <TableComponent country='VFS' />
        )
      }
    </div>
  )
}

export default Vfs
