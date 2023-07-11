import React from 'react'
import { Box, Typography } from '@mui/material'
import { AccountCircleRounded } from '@mui/icons-material'
import styled from 'styled-components'


const HeaderWrapper = styled(Box)`
	margin: 20px 15px 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const AccountWrapper = styled(Box)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding-right: 25px;
`

const headerFontStyle = {
	color: '#ffffff',
	fontWeight: 'bold',
	fontFamily: 'inherit',
	paddingRight: '10px'
}

const Header = (props) => {
  return (
    <HeaderWrapper>
        <Typography variant='h4' style={headerFontStyle}>{props.title}</Typography>
		<AccountWrapper>
			<Typography variant='h6' style={headerFontStyle}>{props.user}</Typography>
        	<AccountCircleRounded sx={{color: '#ffffff'}}/>
		</AccountWrapper>
    </HeaderWrapper>
  )
}

export default Header