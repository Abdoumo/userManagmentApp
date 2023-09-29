import React, { useContext, useState } from 'react'
import { Radio, Space, Table, Tag, Button } from 'antd';
import { AppContext } from '../../App';
import { useNavigate } from 'react-router';
import './table.css'




const columns = [
  // {
  //   title: 'Name',
  //   dataIndex: 'name',
  //   key: 'name',
  //   render: (text) => <a>{text}</a>,
  // },
  {
    title: 'lastName',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },{
    title: 'Date de naissanse',
    dataIndex: 'DOT',
    key: 'DOT',
  },{
    title: 'passport Status',
    dataIndex: 'passportSt',
    key: 'passportSt',
  },{
    title: 'Email',
    dataIndex: 'mail',
    key: 'mail',
  },{
    title: 'Numero Téléphone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'PAYED',
    key: 'PAYED',
    dataIndex: 'PAYED',
    render: (_,PAYED) => (
      <span>
            <Tag color={PAYED.PAYED === 'PAYED' ? 'green' : (PAYED.PAYED === 'NOT PAYED') ? 'red': 'orange'} key={PAYED.PAYED}>
              {PAYED.PAYED}
            </Tag>
        
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Edit {record.name}</a>
        {/* <a>Delete</a> */}
      </Space>
    ),
  },
];


const TableComponent = (country) => {
  const navigate = useNavigate()
  const { data } = useContext(AppContext)
  const CountryWebsite = data[country.country]
  let UserIDS = Object.keys(CountryWebsite)
  console.log(country.country)
    return (
      <div>      
        <Button type="primary" onClick={() => navigate(`/CreateUser`, {state : {country: country.country}})} style={{margin: '25px'}} size={'large'}> Ajouter un utulisateur </Button>  
        {/* <Table
          columns={columns}
          pagination={{
            position: ['bottomCenter'],
          }}
          
          dataSource={Object.values(CountryWebsite)}
        /> */}
        
      </div>
    );
}

export default TableComponent


