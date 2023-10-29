import React, { useContext, useEffect, useState } from 'react'
import { Space, Table, Tag, Button, Modal } from 'antd';
import { AppContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import './table.css';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';





const TableComponent = (country) => {
  const navigate = useNavigate()
  const { data } = useContext(AppContext)
  const CountryWebsite = data[country.country]
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ userViewer , setUserViewer ] = useState({});

  const showModal = (record) => {
    setIsModalOpen(true);
    setUserViewer(record)
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
const columns = [
  // {
  //   title: 'Name',
  //   dataIndex: 'name',
  //   field: 'name',
  //   render: (text) => <a>{text}</a>,
  // },
  {
    title: 'lastName',
    field: 'lastName',
    dataIndex: 'lastName',
    
    
  },
  {
    title: 'name',
    field: 'name',
    dataIndex: 'name',
  },{
    title: 'Date de naissanse',
    field: 'DOT',
    dataIndex: 'DOT',
  },{
    title: 'passport Status',    
    field: 'passportSt',
    dataIndex: 'passportSt',
  },{
    title: 'Email',
    field: 'mail',
    dataIndex: 'mail',
    
  },{
    title: 'Numero Téléphone',
    field: 'phone',
    dataIndex: 'phone',
  },
  {
    title: 'PAYED',
    field: 'PAYED',
    dataIndex: 'PAYED',
    
    render: (_,PAYED, key) => (
      <span>
            <Tag  color={PAYED.PAYED === 'PAYED' ? 'green' : (PAYED.PAYED === 'NOT PAYED') ? 'red': 'orange'} field={PAYED.PAYED}>
              {PAYED.PAYED}
            </Tag>
        
      </span>
    ),
  },
//   {
//     title: "Actions",
//     formatter: function(cell, formatterParams, onRendered) {
//         return <button  className='some' onClick={() => handleEdit(cell)}>Edit</button>;
//     },
//     headerSort: false,
//     width: 100,
// },
{
  movableColumns: true, 
  title: 'Action',
    headerHozAlign:"center", // => Age title  
        hozAlign : 'center', // the progress bar
        formatter: "textarea",
        editor: "textarea",      
        headerFilter: "input",
    field: 'action',
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined onClick={() => {
          navigate('/updateuser', { state: {userdata: record, site: country.country} })
        }}  />
        <EyeOutlined onClick={() => showModal(record)}    />
        {/* <a>Delete</a> */}
      </Space>
    ),
  },
];
  useEffect(() => {
    
  }, [data])
  
    return (
      <div>      
        <Table
          columns={columns}
          pagination={{
            position: ['bottomCenter'],
          }}
          
          dataSource={Object.values(CountryWebsite)}
        />
        {/* <ReactTabulator
            columns={columns}
            data={Object.values(CountryWebsite)}
            options={dateOption}
            />  */}
        <Modal title="Utulisateure info" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <table id='tableViewer' style={{width: '100%'}}>
            <tr>
              <td>Nom :</td>
              <td>{userViewer?.name}</td>
            </tr>
        <tr> <td>Prénom: </td><td>{userViewer?.lastName} </td></tr>
        <tr> <td>mail: </td> <td>{userViewer?.mail} </td> </tr>
        <tr> <td>Date de naissanse : </td><td>{userViewer?.DOT}  </td></tr>
        <tr> <td>NPassport : </td><td>{userViewer?.NPassport}  </td></tr>
        <tr> <td>NRPassport : </td><td> {userViewer?.NRPassport} </td></tr>
        <tr> <td>Exp Passport : </td><td> {userViewer?.passportSt} </td></tr>
        <tr> <td>VILLE : </td><td>  {userViewer?.VILLE}</td></tr>
        <tr> <td>ADRESSE : </td><td> {userViewer?.ADRESS} </td></tr>
        <tr> <td>Télépone : </td><td>{userViewer?.phoneNumber}  </td></tr>
        <tr> <td>Payment : </td><td> {userViewer?.PAYED} </td></tr>
        <tr> <td>willaya : </td><td> {userViewer?.willaya} </td></tr>
        <tr> <td>etat Civile : </td><td>{userViewer?.etatCivile}  </td></tr>
          </table>
      </Modal>
{/*      
mail
DOT
NPassport
NRPassport
passportSt
VILLE
ADRESS
phone
PAYED
willaya
etatCivile */}


      </div>
    );
}

export default TableComponent


