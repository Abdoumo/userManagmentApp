import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Modal, Input } from 'antd';

const LeftSide = () => {
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


  const navigate = useNavigate();
  return (
    <div className="leftside">
      <Stack spacing={2} direction="column">
      <Button onClick={() => navigate('/')} variant="contained">BLS</Button>
      <Button onClick={() => navigate('/canada')} variant="contained">Canada</Button>
      <Button onClick={() => navigate('/tls')} variant="contained">TLS</Button>
      <Button onClick={() => navigate('/vfs')} variant="contained">VFS</Button>
      
     
      {/* Button to show new popup */}
      <Button onClick={handleShowPopup} variant="outlined">
          +
        </Button>

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
            <Button key={index} onClick={() => navigate(`${popup.value}`, {state : {country: `${popup.value}`}})} variant="contained">{popup.value}
            </Button>
          )
        ))}
      </Stack>
    </div>
  )
}

export default LeftSide 