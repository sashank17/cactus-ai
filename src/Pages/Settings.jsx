import React, { useState } from 'react'
import { Box, Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Snackbar, Alert } from '@mui/material'
import styled from 'styled-components'

const SettingsGrid = styled(Grid)`
	width: 100%;
	padding-left: 10px;
`
const PasswordSettingsBox = styled(Box)`
	width: 100%;
	height: 400px;
	border-radius: 20px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding: 10px;
`
const SettingsHeader = styled(Typography)`
	width: 100%;
	font-family: inherit;
	font-weight: bold;
	color: #121B28;
`
const ChangePasswordButton = styled(Button)`
	text-transform: none;
	margin: 20px;
	background-color: #121B28;
`

const Settings = (props) => {

	const [dialogOpen, setDialogOpen] = useState(false)
	const [snackbarOpen, setSnackbarOpen] = useState(false)

	const [oldPassword, setOldPassword] = useState("")
	const [newPassword, setNewPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const [errorMessages, setErrorMessages] = useState({})
	const errors = {
		noOld: "Please enter current password.",
		noNew: "Please enter new password.",
		noConfim: "Please re-type new password.",
		old: "Incorrect password.",
		confirm: "New Passwords do not match."
	}

	const renderErrorMsg = (name) => name === errorMessages.name && (
		<p style={{color: 'red', paddingTop: '5px', paddingLeft: '10px', fontSize: '14px'}}>{errorMessages.message}</p>
	)

	const handleDialogOpen = () => {
		setDialogOpen(true);
	};

	const handleDialogClose = () => {
		setDialogOpen(false);
	};

	const handlePasswordChange = (event) => {

		event.preventDefault()

		if (!oldPassword) {
			setErrorMessages({name: 'noOld', message: errors.noOld})
			return
		}
		if (!newPassword) {
			setErrorMessages({name: 'noNew', message: errors.noNew})
			return
		}
		if (!oldPassword) {
			setErrorMessages({name: 'noConfirm', message: errors.noConfirm})
			return
		}

		if (oldPassword !== props.password) {
			setErrorMessages({name: 'old', message: errors.old})
			return
		}
		if (newPassword !== confirmPassword) {
			setErrorMessages({name:'confirm', message: errors.confirm})
			return
		}
		else {
			handleDialogClose()
			setSnackbarOpen(true)
		}
	}

	const handleSnackbarClose = () => {
		setSnackbarOpen(false)
	}


    return (
		<SettingsGrid container spacing={2}>
			<Grid item xs={12}>
				<PasswordSettingsBox>
					<SettingsHeader variant='h5'>Password Settings</SettingsHeader>
					<ChangePasswordButton variant='contained' onClick={handleDialogOpen}>
						Change Password
					</ChangePasswordButton>
					<Dialog open={dialogOpen} onClose={handleDialogClose}>
						<DialogTitle>Change Password</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								variant='standard'
								placeholder="Current Password"
								type="password"
								fullWidth
								InputProps={{disableUnderline: true}}
								onChange={(event) => setOldPassword(event.target.value)}
							/>
							
							<TextField
								margin="dense"
								variant='standard'
								placeholder="New Password"
								type="password"
								fullWidth
								InputProps={{disableUnderline: true}}
								onChange={(event) => setNewPassword(event.target.value)}
							/>
							
							<TextField
								margin="dense"
								variant='standard'
								placeholder="Confirm New Password"
								type="password"
								fullWidth
								InputProps={{disableUnderline: true}}
								onChange={(event) => setConfirmPassword(event.target.value)}
							/>

							{renderErrorMsg("noOld")}
							{renderErrorMsg("old")}
							{renderErrorMsg("noNew")}
							{renderErrorMsg("noConfirm")}
							{renderErrorMsg("confirm")}

						</DialogContent>
						<DialogActions>
							<Button onClick={handleDialogClose} >
								Cancel
							</Button>
							<Button onClick={handlePasswordChange}>
								Save
							</Button>
						</DialogActions>
					</Dialog>
					<Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={handleSnackbarClose}>
						<Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
							Password Changed Successfully!
						</Alert>
					</Snackbar>
				</PasswordSettingsBox>
			</Grid>
		</SettingsGrid>
    )
}

export default Settings