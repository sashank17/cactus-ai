import { useState } from 'react'
import LoginPage from "./Pages/LoginPage"
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import Sidebar from './Components/global/Sidebar'
import { Routes, Route } from "react-router-dom"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
		{ isLoggedIn ? (
			<div className='app'>
				<Sidebar setIsLoggedIn={setIsLoggedIn}/>
				<main className='content'>
					<Routes>
						<Route path='/' element={<Dashboard />} />
						<Route path='/settings' element={<Settings />} />
					</Routes>
				</main>
			</div>
			)
			: (<LoginPage setIsLoggedIn={setIsLoggedIn}/>)
		}
    </>
  );
}

export default App;
