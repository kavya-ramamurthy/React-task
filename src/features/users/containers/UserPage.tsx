import UserList from "../components/UserList"
import { useUsers } from "../hooks/useUsers"





export function UserPage (){
    const {users, loading, error} = useUsers()

 if (loading) return <p>Loading...</p>
 if (error ) return <p>Error : {error}</p>

 return <UserList users= {users}  />

}