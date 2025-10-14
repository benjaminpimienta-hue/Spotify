import React from 'react'
import { useNavigate } from 'react-router-dom'

function GoToApiButton() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/api')
  }

  return (
    <button onClick={handleClick}>
      Ir a API
    </button>
  )
}

export default GoToApiButton
