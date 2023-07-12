import { useState } from 'react'
import LoginPage from "./Pages/LoginPage"
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import Sidebar from './Components/global/Sidebar'
import Header from './Components/global/Header'
import { Routes, Route } from "react-router-dom"


function App() {
  	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [headerTitle, setHeaderTitle] = useState("Dashboard")
  	const [user, setUser] = useState("")

	return (
		<>
			{ 
				isLoggedIn ? (
					<div className='app'>
						<Sidebar setIsLoggedIn={setIsLoggedIn} setHeaderTitle={setHeaderTitle}/>
						<main className='content'>
							<Header title={headerTitle} user={user} />
							<Routes>
								<Route path='/' element={<Dashboard />} />
								<Route path='/settings' element={<Settings />} />
							</Routes>
						</main>
					</div>
				)
				: (<LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>)
			}
		</>
	);
}

export default App;
