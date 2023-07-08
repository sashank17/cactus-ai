import React from 'react'
import ProgressCircle from './ProgressCircle'
import { Box, Typography } from '@mui/material'
import styled from 'styled-components'


const StatBoxWrapper = styled(Box)`
    width: 100%;
    margin: 0px 30px;
`

const StatBox = (props) => {
    return (
        <StatBoxWrapper>
            <Box display='flex' justifyContent='space-between'>
                <Box>
                    {props.icon}
                    <Typography variant='h6' fontWeight='bold' color='#ffffff' fontFamily='inherit'>
                        {props.title}
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={props.progress} />
                </Box>
            </Box>

            <Box display='flex' justifyContent='space-between'>  
                <Typography variant="body2" color='#9CFCD8' fontFamily='inherit'>
                    {props.subtitle}
                </Typography>
                <Typography variant='body2' fontStyle='italic' color='#9CFCD8' fontFamily='inherit'>
                    {props.percentIncrease}
                </Typography>
            </Box>
        </StatBoxWrapper>
    )
}

export default StatBox