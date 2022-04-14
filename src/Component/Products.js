import React from 'react'
import { Container, Grid } from '@mui/material'
import Card from './Card'
import Data from './Data';

export default function Products({setCount}) {
    return(
        <>
            <Container>  
                <Grid container spacing={2}>
                    {
                        Data.map((i)=> (
                            <Grid item xs={4} key={i.id}>
                                <Card CardData={i} setCountCard={setCount} />
                            </Grid>
                        )) 
                    }
                </Grid>
            </Container>
        </>
    );
}

