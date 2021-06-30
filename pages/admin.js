import React from 'react'
import { useContext } from 'react'
import { AuthContext} from '../contexts/AuthContext'
import SignIn, { SignInButton } from './signin'

export default function Admin() {
  const {user} = useContext(AuthContext)
  return (
    <div>
      {user ? 
      <h1>Welcome User</h1>
      :
      <SignInButton></SignInButton>
      }
    </div>
  )
}
