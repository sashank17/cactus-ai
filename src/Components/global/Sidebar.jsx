import { React, useState} from 'react'
import logo from '../../assets/Cactus-ai icon.png'
import { SidebarData } from '../../utils/SidebarData'
import MenuItem from '../MenuItem'
import { Box, Button, Typography, StyledEngineProvider, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { MenuRounded, LogoutRounded } from '@mui/icons-material'
import styled from 'styled-components'


const NavIcon = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 15px 30px;
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
const SidebarWrapper = styled.nav`
    background: #121B28;
    width: 300px;
    height: 100vh;
`
const SidebarNav = styled.div`
    width: 100%;
`
const MenuWrapper = styled(Box)`
	height: 85vh;
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
		cursor: pointer;
	}

	&.MuiButton-text {
		padding: 10px 35px;
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
                <SidebarNav>
                    <NavIcon>
                        <LogoWrapper>
                            <LogoImage src={logo} alt='logo' />
                            <Typography variant='body1' pl='10px' fontFamily='inherit' fontSize='18px' color='#9CFCD8'>
                                cactus.ai
                            </Typography>
                        </LogoWrapper>
                        {/* <MenuRounded /> */}
                    </NavIcon>
                    <MenuWrapper>
                        <Box width='100%'>
                            {SidebarData.map((item, index) => {
                                return <MenuItem item={item} key={index} selected={selected} setSelected={setSelected}/>
                            })}
                        </Box>
						<StyledEngineProvider>
							<LogoutButton variant='text' onClick={() => setLogoutDialogOpen(true)}
							disableElevation disableRipple disableFocusRipple 
							startIcon={<LogoutRounded sx={{fontSize: '20px'}}/>}>
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
                </SidebarNav>
            </SidebarWrapper>
        </>
    )
}
export default Sidebar