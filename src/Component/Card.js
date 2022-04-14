import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import '../Stylesheets/Card.css';
import { useHistory, Link } from 'react-router-dom';

export default  function CardMain({CardData, setCountCard}) {
   const history = useHistory();
  return (
    <Card sx={{ maxWidth: 345 }} className='each-card'>
      <CardMedia component="img" alt="green iguana" image={CardData.image}  >
      </CardMedia>
      
      <CardContent>
        <Typography variant="h5" >{CardData.title}</Typography>
        <Typography  color="text.secondary">{CardData.desc}</Typography>
      </CardContent>

      <CardActions className='card-btns'>
          <Button Button size="small" onClick={() => setCountCard(CardData)}>Add To Cart</Button>
          <Link to={`/viewProducts/${CardData.id}`} onClick={() => {
            history.push(`/viewProducts/${CardData.id}`)
          }} >View</Link>
      </CardActions>
    </Card>
  );    
}



