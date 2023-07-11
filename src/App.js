import { useState } from 'react'
import LoginPage from "./Pages/LoginPage"
import Dashboard from './Pages/Dashboard'
import Settings from './Pages/Settings'
import Sidebar from './Components/global/Sidebar'
import { Routes, Route } from "react-router-dom"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState("")

  return (
    <>
		{ isLoggedIn ? (
			<div className='app'>
				<Sidebar setIsLoggedIn={setIsLoggedIn}/>
				<main className='content'>
					<Routes>
						<Route path='/' element={<Dashboard user={user}/>} />
						<Route path='/settings' element={<Settings user={user} />} />
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
