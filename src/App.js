import { useState, useEffect } from 'react'
import LoginPage from "./Pages/LoginPage"
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import Sidebar from './Components/global/Sidebar'
import Header from './Components/global/Header'
import useWindowDimensions from './utils/windowDimensions'
import { Routes, Route } from "react-router-dom"
import styled from 'styled-components'


const Content = styled.main`
	width: 100%;
    height: 100%;
    font-family: 'Nunito', sans-serif;
    margin: 0;
	margin-left: ${(props) => props.isSidebarCollapsed ? '50px' : '300px'};
    box-sizing: border-box;
	background-color: #ffffff;
	transition: all 0.3s ease-in-out;
	
	@media screen and (max-width: 800px) {
		margin-left: 0;
	}
`

function App() {
  	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [headerTitle, setHeaderTitle] = useState("Dashboard")
  	const [user, setUser] = useState("")
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)


	const {width, height} = useWindowDimensions()

	useEffect(() => {
		width <= 1024 ? setIsSidebarCollapsed(true) : setIsSidebarCollapsed(false)
	}, [width])

	return (
		<>
			{ 
				isLoggedIn ? (
					<div className='app'>
						<Sidebar setIsLoggedIn={setIsLoggedIn} setHeaderTitle={setHeaderTitle} isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed}/>
						<Content isSidebarCollapsed={isSidebarCollapsed}>
							<Header title={headerTitle} user={user} isSidebarCollapsed={isSidebarCollapsed} setIsSidebarCollapsed={setIsSidebarCollapsed}/>
							<Routes>
								<Route path='/' element={<Dashboard />} />
								<Route path='/settings' element={<Settings />} />
							</Routes>
						</Content>
					</div>
				)
				: (<LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>)
			}
		</>
	);
}

export default App;
