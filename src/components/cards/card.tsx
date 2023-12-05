import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import { Box, CardActionArea, Modal } from '@mui/material';
import { CreateModal } from '../create-modal/create-modal';

interface CardProps {
  "id": string,
  "name": string,
  "image": string,
  "description": string,
  "price": string,
  "currency": string,
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 7,
  overflow: 'scroll',
  maxHeight: '80%',
  scrollbars: ''
};

export default function Cards({ id, name, price, image, description, currency } : CardProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ maxWidth: 345, display: 'flex',flexDirection: 'column', alignContent: 'center', width: '250px', borderRadius: '8px', boxShadow: 'rgba[100, 100, 111, 0.2] 0px 7px 29px 0px', padding: 0 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia sx={{borderRadius: '8px 8px 0 0', objectFit: 'cover'}}
            component="img"
            height="200vw"
            image={ image }
            alt={ name }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { name }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              { description }
            </Typography>
            <Typography variant="h6" fontWeight={'bold'}>
              { currency }{ price }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <div className='modal-overlay'>
        <Box sx={style}>
            <CreateModal
              price={price}
              key={id}
              name={name}
              image={image}
              currency={currency}
              description={description} 
              id={id}/>
          </Box>
        </div>          
      </Modal>
    </>
  );
}
