import React, { useState } from 'react'
import './LoginPage.css'
import logo from '../assets/logo.png'
import users from '../utils/user-data.json'

import { Box, Button, IconButton, TextField, InputAdornment, StyledEngineProvider } from '@mui/material'
import { AccountCircleRounded, LockRounded, VisibilityOffRounded, VisibilityRounded } from '@mui/icons-material';

const LoginPage = (props) => {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const [errorMessages, setErrorMessages] = useState({})
	const errors = {
		credential: "Inavlid username or password.",
		noUsername: "Please enter your Username.",
		noPassword: "Please enter your Password."
	}

	// Render error messages
	const renderErrorMsg = (name) => name === errorMessages.name && (
		<p className='error-msg'>{errorMessages.message}</p>
	)

	const handleSubmit = (event) => {

		// Prevent page from reloading
        event.preventDefault();

		if(!username) {
			// Username input is empty
			setErrorMessages({name: "noUsername", message: errors.noUsername})
			return
		}
		if(!password) {
			// Password input is empty
			setErrorMessages({name: "noPassword", message: errors.noPassword})
			return
		}

		// Search for user credentials
		const currentUser = users.find((user) => user.username === username && user.password === password)

		if(!currentUser) {
			// Invalid User
			setErrorMessages({name: "credential", message: errors.credential})
		}
		else {
			setErrorMessages({})
			props.setUser({'username': username, 'password': password})
			props.setIsLoggedIn(true)
		}
    }

	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	}

	return (
		<div className='login-screen'>
			<div className='login-card'>
				<div>
					<div className='logo-container'>
						<img src={logo} alt="logo" className='logo'/>
					</div>
					<Box component='form' onSubmit={handleSubmit}>
						<StyledEngineProvider injectFirst>
							<div className='input-container' id='username'>
								<TextField type="text" fullWidth placeholder='Username' 
								name='username' value={username} 
								onChange={(event) => setUsername(event.target.value)}
								variant='standard'
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<AccountCircleRounded />
										</InputAdornment>
									),
									disableUnderline: true,
								}}
								/>
							</div>
							{renderErrorMsg("noUsername")}
							<div className="input-container" id='password'>
								<TextField type={showPassword ? 'text' : 'password'} fullWidth placeholder='Password' 
								name='password' value={password} 
								onChange={(event) => setPassword(event.target.value)}
								variant='standard'
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<LockRounded />
										</InputAdornment>
									),
									disableUnderline: true,
									endAdornment: (
										<InputAdornment position="end">
											<IconButton aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end">
												{showPassword ? <VisibilityOffRounded /> : <VisibilityRounded />}
											</IconButton>
										</InputAdornment>
									)
								}}
								/>
							</div>
							{renderErrorMsg("credential")}
							{renderErrorMsg("noPassword")}
							<div className="button-container">
								<Button type="submit" className='login-button' variant='contained'>Login</Button>
							</div>
							
							<div className="forgot-link">
								<a href="">Forgot password?</a>
							</div>
						</StyledEngineProvider>
					</Box>
				</div>	
			</div>
	   </div>
	)
}

export default LoginPage