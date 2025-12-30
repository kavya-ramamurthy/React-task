interface UserCardprops {
    name : string
    email: string
    isActive: boolean
}

export function UserCard ({name,email,isActive}: UserCardprops){
    return(
         <div style={{ border: "1px solid gray", padding: "12px", width: "250px" }}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>Status: {isActive ? "🟢 Active" : "🔴 Inactive"}</p>
    </div>
  
    )
}