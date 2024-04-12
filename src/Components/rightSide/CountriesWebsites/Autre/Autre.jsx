import React from 'react'
import { Button } from 'antd';
import TableComponent from '../../table';
import { useLocation, useNavigate } from 'react-router-dom';

const Autre = ({data, ADDed}) => {
    const location = useLocation()
    const navigate = useNavigate()
    let WebsiteUserCreate = location.state
  return (
    <div>
    <Button type="primary" className='ADDUSER' onClick={() => navigate(`/CreateUser`, {state : {country: ADDed}})} style={{margin: '25px'}} size={'large'}> Ajouter un utulisateur </Button>
    {
      data[ADDed] && (
        <TableComponent country={ADDed} />
      )
    }
  </div>
  )
}

export default Autre