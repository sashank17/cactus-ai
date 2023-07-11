import React from 'react'
import Header from '../Components/Header'

const Settings = (props) => {
  return (
    <Header title="Settings" user={props.user}/>
  )
}

export default Settings