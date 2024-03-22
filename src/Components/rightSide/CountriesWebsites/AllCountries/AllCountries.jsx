import React, { useEffect } from 'react'
import { Button } from 'antd';
import TableComponent from '../../table';
import { useLocation, useNavigate } from 'react-router-dom';

const AllCountries = ({data, ADDed}) => {
    const location = useLocation()
    const navigate = useNavigate()

    let WebsiteUserCreate = location.state
    useEffect(() => {
    
  }, [data])
  return (
    <div>
      <Button type="primary" onClick={() => navigate(`/CreateUser`, {state : {country: location.state.country}})} style={{margin: '25px'}} size={'large'}> Ajouter un utulisateur </Button>
      {
        data[location.state.country] && (
          <TableComponent country={location.state.country} />
        )
      }
    </div>
  )
}

export default AllCountries
