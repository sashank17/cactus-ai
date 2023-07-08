import { React, useState} from 'react'
import logo from '../../assets/Cactus-ai icon.png'
import { SidebarData } from '../../utils/SidebarData'
import MenuItem from '../../Components/MenuItem'
import { Typography } from '@mui/material'
import { MenuRounded, LogoutRounded } from '@mui/icons-material'
import styled from 'styled-components'


const NavIcon = styled.div`
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 15px;
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

const Sidebar = () => {

    // const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState('Dashboard')

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

                    {SidebarData.map((item, index) => {
                        return <MenuItem item={item} key={index} selected={selected} setSelected={setSelected}/>
                    })}

                    {/* <MenuItem item={{title: 'Logout', path: '', icon: <LogoutRounded />}}/> */}
                </SidebarNav>
            </SidebarWrapper>
        </>
    )
}
export default Sidebar