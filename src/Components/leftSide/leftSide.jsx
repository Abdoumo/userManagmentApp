import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Modal, Input } from 'antd';
import { AppContext } from '../../App';

const LeftSide = () => {
  const { data, userLogin } = React.useContext(AppContext);
  const [buttonCount, setButtonCount] = useState(1); // State to keep track of button count
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [popups, setPopups] = useState([]);


  const handleShowPopup = () => {
    setPopups(prevPopups => [...prevPopups, { visible: true, value: '' }]);
  };

  const handleOk = (index) => {
    const updatedPopups = [...popups];
    updatedPopups[index].visible = false;
    updatedPopups[index].value = inputValue;
    setPopups(updatedPopups);
    setInputValue('');
  };

  const handleCancel = (index) => {
    const updatedPopups = [...popups];
    updatedPopups[index].visible = false;
    setPopups(updatedPopups);
    setInputValue('');
  };

  const Logout = () => {
    localStorage.removeItem('myData')
    localStorage.removeItem('UserLogin')
    window.location.reload()
  }


  const navigate = useNavigate();
  return (
    <div className="leftside">
      <Stack spacing={2} direction="column">
      {
        Object.keys(data)?.map((ele, keys) => {
            return <Button key={keys} onClick={() => navigate(`/${ele}`)}>{ele}</Button>
        })
      }
     
      {/* Button to show new popup */}


        {/* Render popups */}
        {popups.map((popup, index) => (
          <Modal
            key={index}
            title="Enter Button Label"
            visible={popup.visible}
            onOk={() => handleOk(index)}
            onCancel={() => handleCancel(index)}
          >
            <Input
              placeholder="Enter button label"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
          </Modal>
        ))}

        {/* Render new buttons from popups */}
        {popups.map((popup, index) => (
          popup.value && (
            <Button key={index} onClick={() => navigate(`${popup.value}`, {state : {country: `${popup.value}`}})} >{popup.value}
            </Button>
          )
        ))}
      <Button onClick={handleShowPopup} variant="contained">
          +
        </Button>
      <Button id='Logout' onClick={() => Logout()}>LOG OUT</Button>
      </Stack>
    </div>
  )
}

export default LeftSide 