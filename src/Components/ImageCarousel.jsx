import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'


const CarouselGrid = styled(Box)`
	grid-column: span 6;
	grid-row: span 2;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 20px;
`
const CarouselHeader = styled(Box)`
	margin-top: 10px;
	padding: 0px 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const CarouselWrapper = styled(Carousel)`
	margin: 15px 5px;
`
const CarouselImage = styled.img`
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 5px;
	margin: 5px 5px 0px;
	height: 125px !important;
	width: auto   !important;	
`

const ImageCarousel = (props) => {
	const sliderItems = props.data.length > 3 ? 3 : props.data.length;
	const items = [];
  
	for (let i = 0; i < props.data.length; i += sliderItems) {
	  if (i % sliderItems === 0) {
		items.push(
			<Grid container spacing={0} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
				{props.data.slice(i, i + sliderItems).map((item, index) => {
					return (
						<CarouselImage src={item.image} alt={item.title} styles={{width: '100%'}} />
					)
				})}
			</Grid>
		);
	  }
	}  

    return (
        <CarouselGrid>
            <CarouselHeader>
                <Typography variant='h6' fontFamily='inherit' fontWeight='600' color='#121B28'>
                    {props.title}
                </Typography>
            </CarouselHeader>
			<CarouselWrapper duration='800'>
				{items}
			</CarouselWrapper>
        </CarouselGrid>
    )
}

export default ImageCarousel