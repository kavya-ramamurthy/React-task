import React from 'react'
import { UserCard } from './Usercard'

function UserCardPage() {
  return (
    <div>
        <UserCard 
        name="Kavya"
        email="kavya@example.com"
        isActive={true}/>
      
    </div>
  )
}

export default UserCardPage

