import React from 'react'
import { Box, Typography } from '@mui/material'
import { AccountCircleRounded } from '@mui/icons-material'
import styled from 'styled-components'


const HeaderWrapper = styled(Box)`
	margin: 45px 15px 30px;
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
	color: '#121B28',
	fontWeight: 'bold',
	fontFamily: 'inherit',
	paddingRight: '10px'
}

const Header = (props) => {
  return (
    <HeaderWrapper>
        <Typography variant='h5' style={headerFontStyle}>{props.title}</Typography>
		<AccountWrapper>
			<Typography variant='body1' style={headerFontStyle}>{props.user}</Typography>
        	<AccountCircleRounded />
		</AccountWrapper>
    </HeaderWrapper>
  )
}

export default Header