import { Box, Button, Card, CardContent, CardMedia, Typography, TextField } from "@mui/material";
import { useState } from 'react';
import { useAdditionalData } from "../../hooks/useAdditionalData";
import './create-modal.css';
import { AdditionalCard } from "../additionalCard/additionalCard";

interface CreateModalProps {
  "id": string,
  "name": string,
  "image": string,
  "description": string,
  "price": string,
  "currency": string,
}

export function setLocalStorage(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
}

export function CreateModal({ id, name, price, image, description, currency }: CreateModalProps) {
  const [ comments, setComments ] = useState("")
  const [count, setCount] = useState(1);

  const handleSubmit = () => {
    setLocalStorage('myKey', comments);
  }

  const { data } = useAdditionalData(id)
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <Box>
      <div className="modal-body">
        <Typography sx={{mb: '3vw'}} variant="h4" fontWeight={'bold'}>
          Revise seu pedido!
        </Typography>
        <div>
          <Card sx={{mb: '3vw', boxShadow: "none"}}>
            <div className="card-content">
              <div className="image">
                <CardMedia sx={{borderRadius: '8px'}}
                component="img"
                width="100"
                height="120"
                image={ image }
                alt={ name }
                />
              </div>
              <CardContent>
                <div className=".details">
                  <Typography variant="h6" fontWeight={'bold'}>{name}</Typography>
                </div>
                <div>
                  <Typography variant="body2">{description}</Typography>
                </div>
                <div className="quantity">
                  <Button onClick={increment}>+</Button>
                    <Typography margin={0} padding={0} alignSelf={'center'}>{count}</Typography>  
                  <Button onClick={decrement}>-</Button>
                </div>
              </CardContent>
              <CardContent>
                <div className="price">
                  <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Typography variant="h6" fontWeight={'bold'}>{currency}{price}</Typography>
                  </Box>
                </div>
              </CardContent>
            </div>
          </Card>  
        </div>
          {data && data?.length > 0 ? 
            (
              <>
                <Typography variant="h5" fontWeight={'bold'} marginBottom={'0.5vw'}>
                  Adicionais
                </Typography>
                <Typography variant="body2" marginBottom={'2vw'}>
                  Selecione os ingredientes que você quer adicionar a mais no seu lanche.
                </Typography>
                <Box sx={{marginBottom: '2vw'}}>
                  {data.map(additionalData => 
                    <AdditionalCard
                      price={additionalData.price.toFixed(2)}
                      key={additionalData.id}
                      name={additionalData.name}
                      image={additionalData.image}
                      currency={additionalData.currency}
                      description={additionalData.description} 
                      id={additionalData.id}
                    />)}
                </Box>
              </>
            ) 
          :
            (<></>)
          }
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <Typography variant="h5" fontWeight={'bold'} marginBottom={'1vw'}>
              Observações
          </Typography>
          <TextField 
            sx={{width: '100%' }} 
            fullWidth label="Asicione uma observação ao pedido" 
            id="fullWidth" 
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setComments(event.target.value);
            }}
          />
        </Box>
        <Box>
          <Button variant="contained" onClick={handleSubmit}>submit test</Button>
        </Box>
      </div>
    </Box>
  )
}