import React from 'react'

const ALerta = ({message, type}) => {
  return (
    <div className={`alerta ${type}`}>
      {message}
    </div>
  )
}

export default ALerta
