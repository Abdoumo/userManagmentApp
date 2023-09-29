import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const LeftSide = () => {
  const navigate = useNavigate();
  return (
    <div className="leftside">
      <Stack spacing={2} direction="column">
      <Button onClick={() => navigate('/')} variant="contained">BLS</Button>
      <Button onClick={() => navigate('/canada')} variant="contained">Canada</Button>
      <Button onClick={() => navigate('/tls')} variant="contained">TLS</Button>
      <Button onClick={() => navigate('/vfs')} variant="contained">VFS</Button>
    </Stack>
    </div>
  )
}

export default LeftSide 