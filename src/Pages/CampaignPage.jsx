import React, { useState } from 'react'
import { IconButton, Box, Button, Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox } from '@mui/material'
import { AddRounded, DownloadRounded, AccountCircleRounded } from '@mui/icons-material'
import styled from 'styled-components'

const CampaignHeader = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
`
const Title = styled(Typography)`
    font-family: inherit;
    font-weight: bold;
    padding: 10px 10px 0px;
`
const DownloadButton = styled(Button)`
    margin-right: 15px;
    text-transform: none;
    font-size: large;
    font-weight: bold;
    font-family: inherit;
    height: 50px;
    color: #047c44;
    border-color: #047c44;
`
const CampaignDashboardContainer = styled(Grid)`
    width: 100%;
    padding: 10px 0px 10px 10px;
`
const CampaignGridBox = styled(Grid)`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	border-radius: 20px;
    height: 740px;
    padding: 10px;
`
const Text = styled(Typography)`
    padding: 0px 10px;
    font-family: inherit;
`
const InputContainer = styled(Box)`
    width: 100%;
    padding: 0px 10px;
`
const InputField = styled(TextField)`
    background-color: #dadcdf;
    width: 90%;
    border-radius: 5px;
    padding: 0px 10px;
    margin-left: 10px;
`

const CampaignPage = () => {
    const [period, setPeriod] = useState('')
    const handleChange = (event) => {
        setPeriod(event.target.value)
    }

    return (
        <>
            <CampaignHeader>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <IconButton size='large'>
                        <AddRounded sx={{fontSize: '36px'}}/>
                    </IconButton>
                    <Typography sx={{fontFamily: 'inherit', fontWeight: 'bold'}} variant='h4'>Create Campaign</Typography>
                </Box>
                <DownloadButton variant='outlined' endIcon={<DownloadRounded color='#047c44'/>}>
                    Download CSV
                </DownloadButton>
            </CampaignHeader>
            <CampaignDashboardContainer container spacing={2}>
                <Grid item xs={9}>
                    <CampaignGridBox>

                        <Title variant='h6'>Audience</Title>
                        <Text variant='body1' color='#047c44'>Select how you want to target.</Text>

                        <Box sx={{margin: '10px', background: '#dadcdf', width: '25%', height: '100px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: 'row'}}>
                            <Box sx={{ margin:'20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                <AccountCircleRounded sx={{fontSize: '30px'}}/>
                                <Text sx={{paddingTop: '5px'}} variant='body2'>Profile Based</Text>
                            </Box>
                            <Checkbox />
                        </Box>

                        <Box display='flex' justifyContent='space-between' alignItems='center' flexDirection='row'>
                            <Box>
                                <Title variant='h6'>Attributes</Title>
                                <Text variant='body1' color='#047c44'>Select attributes you want to show the targets.</Text>
                            </Box>
                            <Button variant='standard' sx={{textTransform: 'none', color: '#047c44'}}>
                                clear all
                            </Button>
                        </Box>

                        <InputContainer width='100%'>
                            <Title variant='body1'>Retailer</Title>
                            <InputField
								variant='standard'
								placeholder="Ex. Walmart, Costco, ..."
								type="Text"
								InputProps={{disableUnderline: true}}
							/>
                        </InputContainer>

                        <InputContainer width='100%'>
                            <Title variant='body1'>Brand</Title>
                            <InputField
								variant='standard'
								placeholder="Ex. Apple, Samsung, ..."
								type="Text"
								InputProps={{disableUnderline: true}}
							/>
                        </InputContainer>

                        <InputContainer width='100%'>
                            <Title variant='body1'>Age Group</Title>
                            <InputField
								variant='standard'
								placeholder="Ex. Millenials, Gen X, ..."
								type="Text"
								InputProps={{disableUnderline: true}}
							/>
                        </InputContainer>

                        <InputContainer width='100%'>
                            <Title variant='body1'>RFM</Title>
                            <InputField
								variant='standard'
								placeholder="Ex. Best-Customers, Loyal-Customers, Whales, Promising, ..."
								type="Text"
								InputProps={{disableUnderline: true}}
							/>
                        </InputContainer>

                        <InputContainer width='100%'>
                            <Title variant='body1'>City</Title>
                            <InputField
								variant='standard'
								placeholder="Ex. Newburg, Hamilton, ..."
								type="Text"
								InputProps={{disableUnderline: true}}
							/>
                        </InputContainer>

                        <InputContainer width='100%'>
                            <Title variant='body1'>State</Title>
                            <InputField
								variant='standard'
								placeholder="Ex. Alaska, Hawaii, ..."
								type="Text"
								InputProps={{disableUnderline: true}}
							/>
                        </InputContainer>

                    </CampaignGridBox>
                </Grid>
                <Grid item xs={3}>
                    <CampaignGridBox display='flex' justifyItems='center' flexDirection='column'>
                        <Title variant='h6'> Forecasted Results </Title>

                        <FormControl fullWidth sx={{margin: '10px 0px'}}>
                            <InputLabel id="demo-simple-select-label">Period</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={period}
                                label="Period"
                                onChange={handleChange}
                            >
                                <MenuItem value={1}>1 month</MenuItem>
                                <MenuItem value={2}>2 months</MenuItem>
                                <MenuItem value={6}>6 months</MenuItem>
                                <MenuItem value={12}>1 year</MenuItem>

                            </Select>
                        </FormControl>

                        <Box borderRadius='10px' border='1px solid #121B28' margin='10px 0px' padding='5px'>
                            <Text variant='body1'>Audience Size</Text>
                            <Typography padding='0px 10px' fontFamily='inherit' fontWeight='bold' variant='h5'>210,000,000+</Typography>
                        </Box>

                        <Text variant='body1'>Forecasted results are directional estimates and do not guarantee performance</Text>

                    </CampaignGridBox>
                </Grid>
            </CampaignDashboardContainer>
        </>
    )
}

export default CampaignPage