import React,{useContext} from 'react'
import UserContext from '../context/Context'

function Profile() {
  const {user}=useContext(UserContext)
  if(!user) return <div>please login</div>

  return (
    <>
        <div>Welcom {user.username}</div>
        <div>{user.password}</div>
    </>
  )
}

export default Profile