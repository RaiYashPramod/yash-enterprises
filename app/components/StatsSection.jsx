import React from 'react'
import { Card, CardSubText, CardText, Grid } from './StylingComponents'

const StatsSection = () => {
  return (
    <>
    <Grid>
      <Card><CardText>18</CardText><CardSubText>Years</CardSubText></Card>
      <Card><CardText>3+</CardText><CardSubText>Projects</CardSubText></Card>
      <Card><CardText>8</CardText><CardSubText>Services</CardSubText></Card>
      <Card><CardText>100%</CardText><CardSubText>Satisfaction</CardSubText></Card>
    </Grid>
    </>
  )
}

export default StatsSection