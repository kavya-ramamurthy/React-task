import type { User } from "../types/types";

   
   type Props = {
    users  : User[]
   }
   
   
   export function UserList ({users}: Props){
    return(
        <>
        <ul>
            {users.map (user =>(
                <li key= {user.id}>{user.firstName}{user.lastName}</li>
            ))}
        </ul>
        
        
        </>
    )
   }

   export default UserList;