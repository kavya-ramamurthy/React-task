import type { User } from "../types/types"


type UserApiResponse = {
    users : User[]
}



export async function fetchUsers(): Promise<User[]>{
    const res = await fetch ("https://dummyjson.com/users")

    if (!res.ok){
        throw new Error ("failed to fetch users")
    }

    const data : UserApiResponse = await res.json()
    return data.users
}