import React, { useContext, useEffect } from 'react'
import TableComponent from '../../table'
import { Button } from 'antd';
import { useNavigate } from 'react-router';

const Canada = ({data}) => {
  const navigate = useNavigate()
  useEffect(() => {
    
  }, [data])
  return (
    <div>
            <Button type="primary" className='ADDUSER' onClick={() => navigate(`/CreateUser`, {state : {country: 'CANADA'}})} style={{margin: '25px'}} size={'large'}> Ajouter un utulisateur </Button>
      {
      data['CANADA'] && (
          <TableComponent country='CANADA' />
        )
      }
    </div>
  )
}

export default Canada
