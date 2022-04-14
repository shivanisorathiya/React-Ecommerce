import React from "react"
import {useParams, useHistory} from "react-router-dom"
import { Container, Grid } from "@mui/material"
import '../Stylesheets/ViewProduct.css'
import CardData from './Data'

export default function ViewProduct() {
    const {id} = useParams()
    //console.log(id);
    const thisProduct = CardData.find((c) => c.id === id)
    //console.log(thisProduct);
    let history = useHistory();
    return (
        <div>
   {
       thisProduct ? (
        <Container>
                <Grid container spacing={2}>
                    {
                    <Grid item xs={12} key={thisProduct.id}>
                        <div className="product-detail">
                            <Grid className="detail-img-wrapper" xs={6}>
                                <img src={thisProduct.image} alt='card'/>
                            </Grid>
                            <Grid className="about-product" xs={6}>
                                <h1>{thisProduct.title}</h1>
                                <p>{thisProduct.desc}</p>
                                <button onClick={() => history.goBack() } className="default-btn">Go Back</button>
                            </Grid>
                        </div>
                    </Grid>
                    }
                </Grid>
        </Container>
 ) : ("null")}

</div>        
    )
}
