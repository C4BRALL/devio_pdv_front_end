import './App.css'
import { Typography } from '@mui/material'
import { useFoodData } from './hooks/useFoodData'
import Cards from './components/cards/card'

function App() {
  const { data } = useFoodData()

  return (
    <>
      <div className='container'>
        <div className='title'>
          <Typography variant="h4" fontWeight={'bold'}>Seja Bem Vindo!</Typography>
        </div>
        <div className='card-grid'>
          {data?.map(foodData => 
            <Cards 
              price={foodData.price.toFixed(2)}
              key={foodData.id}
              name={foodData.name}
              image={foodData.image}
              currency={foodData.currency}
              description={foodData.description} 
              id={foodData.id}
          />)}
        </div>
          
      </div>
    </>
  )
}

export default App
