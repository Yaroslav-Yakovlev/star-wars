import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const EntityModal = ({ open, onClose }) => {
  const { items } = useSelector(state => state.favorites);

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, bgcolor: 'background.paper',
        boxShadow: 24, p: 4 }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          {items.map(item => <li key={item.name}>
            {item.name}
            {item.imageUrl}
          </li>)
          }
        </Typography>
        <Typography variant="body1" gutterBottom>
          description
        </Typography>
        <Button
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default EntityModal;
