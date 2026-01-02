import { useEffect, useState } from "react"
import { fetchUsers } from "../services/userApi"
import type { User } from "../types/types"

export function useUsers (){
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState (true)
    const [error, setError] = useState<string | null> (null)



  useEffect(()=>{
    fetchUsers()
    .then (setUsers)
    .catch (err => setError(err.message))
    .finally(()=> setLoading(false))
    
  },[])




    return {users, loading, error}


}