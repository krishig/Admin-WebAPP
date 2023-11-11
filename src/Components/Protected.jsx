import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Protected = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()



  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return navigate('/')
  }, [location])


  return children
}

export default Protected
