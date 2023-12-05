import { Box, Card, CardContent, CardMedia, Checkbox, Typography } from "@mui/material";
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
// import { useState } from 'react'
import './additionalCard.css'

interface AdditionalCardProps {
  "id": string,
  "name": string,
  "image": string,
  "description": string,
  "price": string,
  "currency": string,
}


export function AdditionalCard({ id, name, price, image, description, currency }: AdditionalCardProps) {
  // const [selectedValue, setSelectedValue] = useState('');

  return (
    <div>
      <Card sx={{boxShadow: "none"}}>
        <Box className="additional-card-grid">
            <div className="additional-image">
              <CardMedia sx={{borderRadius: '8px'}}
                component="img"
                height='65vw'
                image={ image }
                alt={ name }
                />
            </div>
            <div className="additional-info">
                <Typography variant="h6" fontWeight={'bold'}>{name}</Typography>
                <Typography variant="body2">{description}</Typography>
            </div>
          <CardContent sx={{p:0, m:0, width: '30%'}}>
            <div className="additional-price">
              <Typography variant="h6" fontWeight={'bold'} display={'flex'} flexDirection={'column'} alignItems={'flex-end'}>{currency}{price}</Typography>
              <Checkbox sx={{ padding: 0, margin: 0, '&:hover': { backgroundColor: 'transparent' }, width:'6vw'}} 
                value={id} 
                icon= {<RadioButtonUncheckedRoundedIcon />} 
                checkedIcon={<RadioButtonCheckedRoundedIcon />}
              />
            </div>
          </CardContent>
        </Box>
      </Card>
    </div>
  )
}