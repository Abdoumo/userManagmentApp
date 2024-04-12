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
    <>
    {
      console.log(Object.keys(data), 'data')
    }
    <div>
      <Button type="primary" onClick={() => navigate(`/CreateUser`, {state : {country: location.state.country}})} style={{margin: '25px'}} size={'large'}> Ajouter un utulisateur </Button>
      {
        (location.state && data[location.state.country] ) ? (
          
          <TableComponent country={location.state.country} />
        )  : navigate(`/404`)
      }
    </div>
      </>
  )
}

export default AllCountries
