import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'


const CarouselGrid = styled(Box)`
	grid-column: span 6;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 20px;

	@media screen and (max-width: 1024px) {
		grid-column: span 12;
    }
`
const CarouselHeader = styled(Box)`
	margin: 10px 0px 30px;
	padding: 0px 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const CarouselWrapper = styled(Carousel)`
	margin: 20px 5px 15px;
`
const CarouselImage = styled.img`
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 5px;
	margin: 5px 5px 0px;
	height: 125px !important;
	width: auto   !important;	
`

const ImageCarousel = (props) => {
	let sliderItems = props.data.length > 3 ? 3 : props.data.length;
	sliderItems = props.winWidth <= 700 ? 2 : sliderItems;
	sliderItems = props.winWidth <= 500 ? 1 : sliderItems;

	const items = [];
  
	for (let i = 0; i < props.data.length; i += sliderItems) {
	  if (i % sliderItems === 0) {
		items.push(
			<Grid container spacing={0} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
				{props.data.slice(i, i + sliderItems).map((item, index) => {
					return (
						<CarouselImage src={item.image} alt={item.title} />
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