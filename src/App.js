import { useState } from 'react'
import LoginPage from "./Pages/LoginPage";
import Dashboard from './Pages/Dashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
      { isLoggedIn ? <Dashboard /> : (<LoginPage setIsLoggedIn={setIsLoggedIn}/>) }
    </>
  );
}

export default App;
