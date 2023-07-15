import { React, useState} from 'react'
import logo1 from '../../assets/cactusicon_green.png'
import logo2 from '../../assets/cactusicon_black.png'
import logo3 from '../../assets/cactusicon_white.png'
import { SidebarData } from '../../utils/SidebarData'
import MenuItem from '../MenuItem'
import { Box, Button, Typography, StyledEngineProvider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { MenuRounded, LogoutRounded } from '@mui/icons-material'
import styled from 'styled-components'


const NavIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 15px;
`
const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const LogoImage = styled.img`
    width: 50px;
    height: auto;
`
const LogoLabel = styled(Typography)`
	font-family: inherit; 
	font-size: 18px;
	color: #9CFCD8;
`
const SidebarWrapper = styled.div`
    background: #121B28;
    width: 300px;
	height: 100%;
`
const MenuWrapper = styled(Box)`
	width: 100%;
	height: calc(100% - 93.7px);
	display: flex; 
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`
const LogoutButton = styled(Button)`
	&.MuiButton-root {
		text-transform: none;
		height: 50px;
		width: 100%;
		justify-content: flex-start;
		color: #e1e9fc;
		font-family: inherit;
		font-size: 18px;
		margin-bottom: 10px;
		padding: 10px 38px;
		cursor: pointer;
	}

	&.MuiButton-root:hover {
		color: #9CFCD8;
		background: none;
	}
`
	
const Sidebar = (props) => {

    // const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState('Dashboard')

	const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
	const handleLogoutDialogClose = () => {
		setLogoutDialogOpen(false);
	};

    return (
        <>
            <SidebarWrapper>
				<NavIcon id='navIcon'>
					<LogoWrapper>
						<LogoImage src={logo1} alt='logo' />
						<LogoLabel variant='body1'>
							cactus.ai
						</LogoLabel>
					</LogoWrapper>
					{/* <MenuRounded /> */}
				</NavIcon>
				<MenuWrapper>
					<Box width='100%'>
						{SidebarData.map((item, index) => {
							return <MenuItem item={item} key={index} setHeaderTitle={props.setHeaderTitle} 
							selected={selected} setSelected={setSelected}/>
						})}
					</Box>
					<StyledEngineProvider>
						<LogoutButton variant='text' onClick={() => setLogoutDialogOpen(true)}
						disableElevation disableRipple disableFocusRipple 
						startIcon={<LogoutRounded sx={{fontSize: '20px', marginRight: '-3px'}}/>}>
							Logout
						</LogoutButton>
					</StyledEngineProvider>
					<Dialog open={logoutDialogOpen} onClose={handleLogoutDialogClose}>
						<DialogTitle fontFamily='inherit'>
							Logout
						</DialogTitle>
						<DialogContent>
							<DialogContentText fontFamily='inherit'>
								Are you sure you want to logout?
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button sx={{fontFamily: 'inherit', color: '#121B28'}} onClick={handleLogoutDialogClose}> No </Button>
							<Button sx={{fontFamily: 'inherit', color: '#121B28'}}  onClick={() => props.setIsLoggedIn(false)} autoFocus> Yes </Button>
						</DialogActions>
					</Dialog>
				</MenuWrapper>
            </SidebarWrapper>
        </>
    )
}
export default Sidebar