import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { getItem, KEY_ACCESS_TOKEN } from '../utils/localStorageManager'

function RequireUser() {
    const user = getItem(KEY_ACCESS_TOKEN);
  return (
    user ? <Outlet /> : <Navigate to="/login"/>
  )
}

export default RequireUser