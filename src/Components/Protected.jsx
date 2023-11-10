import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Protected = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const tokenExpirationTime = 5 * 60 * 1000; // 5 minutes in milliseconds
  setTimeout(() => {
    localStorage.removeItem("token"); // Remove the token from local storage
  }, tokenExpirationTime)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return navigate('/')
  }, [location])


  return children
}

export default Protected
