import {UsersContext } from '../context/UserContext'
import { useContext } from 'react'

export const useUsersContext = () => {
  const context = useContext(UsersContext)

  if (!context) {
    throw Error('useusersContext must be used inside an usersContextProvider')
  }

  return context
}