import React from 'react'
import "./WelcomeMessage.css"

const WelcomeMessage = ({userName,title,subMessage}) => {
  return (
    <div>
        <h1 className='welcome-title'>{title} <span>{userName}</span></h1>
        <p className='subMessage'>{subMessage}</p>
    </div>
  )
}

export default WelcomeMessage