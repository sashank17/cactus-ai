import React from 'react'
import { Box, Typography, Card, Grid } from '@mui/material'
import styled from 'styled-components'
import Carousel from 'react-material-ui-carousel'


const CarouselGrid = styled(Box)`
	grid-column: span 6;
	grid-row: span 2;
	background-color: #121B28;
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
	margin: 30px 25px;
`
const ImagePlaceholder = styled(Box)`
	margin: 15px;
	width: 125px;
	height: 125px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	border-radius: 25px;
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
						<ImagePlaceholder>
							<Typography variant='body1' fontFamily='inherit' >
								{item.title}
							</Typography>
						</ImagePlaceholder>
					)
				})}
			</Grid>
		);
	  }
	}  

    return (
        <CarouselGrid>
            <CarouselHeader>
                <Typography variant='h6' fontFamily='inherit' fontWeight='600' color='#ffffff'>
                    {props.title}
                </Typography>

            </CarouselHeader>
				<CarouselWrapper animation='slide' duration='800'>
					{items}
				</CarouselWrapper>
        </CarouselGrid>
    )
}

export default ImageCarousel