import React from 'react'
import StatBox from '../Components/StatBox'
import { StatBoxData } from '../utils/StatBoxData'
import LineChart from '../Components/LineChart'
import BarChart from '../Components/BarChart'
import ImageCarousel from '../Components/ImageCarousel'
import { BrandsData } from '../utils/CarouselData'
import { RetailersData } from '../utils/CarouselData'
import { Box, Typography } from '@mui/material'
import { PaidRounded, PointOfSaleRounded } from '@mui/icons-material'
import styled from 'styled-components'


const DashboardGrid = styled(Box)`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-auto-rows: 120px;
	gap: 17px;
	margin: 0px 15px;
`
const StatBoxGrid = styled(Box)`
	grid-column: span 3;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
`
const LineChartGrid = styled(Box)`
	grid-column: span 8;
	grid-row: span 2;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 20px;
`
const ChartHeader = styled(Box)`
	margin-top: 10px;
	padding: 0px 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const BarChartGrid = styled(Box)`
	grid-column: span 4;
	grid-row: span 2;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 20px;
`

const Dashboard = (props) => {
  return (
	<DashboardGrid>
		{StatBoxData.map((item, index) => {
			return (
				<StatBoxGrid>
					<StatBox title={item.title} subtitle={item.subtitle} progress={item.progress} icon={item.icon} percentIncrease={item.percentIncrease} />
				</StatBoxGrid>
			)
		})}

		<LineChartGrid>
			<ChartHeader>
				<Box>
					<Typography variant="h6" fontFamily='inherit' fontWeight='600' color='#121B28'>
						Revenue Generated
					</Typography>
					<Typography variant="h5" fontFamily='inherit' fontWeight='500' color='#047c44'>
						$ 59,340
					</Typography>
				</Box>
				<Box>
					<PaidRounded sx={{color: '#047c44', fontSize: '36px'}}/>
				</Box>
			</ChartHeader>
			<Box height="225px" ml="-20px" mt="-35px">
				<LineChart />
			</Box>
		</LineChartGrid>

		<BarChartGrid>
			<ChartHeader>
				<Box>
					<Typography variant="h6" fontFamily='inherit' fontWeight='600' color='#121B28'>
						Total Monthly Sales
					</Typography>
					<Typography variant="h5" fontFamily='inherit' fontWeight='500' color='#047c44'>
						$ 456
					</Typography>
				</Box>
				<Box>
					<PointOfSaleRounded sx={{color: '#047c44', fontSize: '36px'}} />
				</Box>
			</ChartHeader>
			<Box height="225px" ml="-20px" mt="-35px">
				<BarChart />
			</Box>
		</BarChartGrid>

		<ImageCarousel title='Top Brands this week' data={BrandsData}/>
		<ImageCarousel title='Top Retailers this week' data={RetailersData}/>

	</DashboardGrid>
  )
}

export default Dashboard