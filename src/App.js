import { useState } from 'react'
import LoginPage from "./Pages/LoginPage"
import Dashboard from './Pages/dashboard/Dashboard'
import Settings from './Pages/settings/Settings'
import Sidebar from './Pages/global/Sidebar'
import { Routes, Route } from "react-router-dom"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
		{ isLoggedIn ? (
			<div className='app'>
				<Sidebar />
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
