
//Create a User interface
interface User {
    id : number
    name : string
    email : string
}



const  user : User = {
    id : 1,
    name : "kavya",
    email : " kav@gmail.com"

}

// example checking with wrong type   
// const user1 : User ={
//     id : "1",
//     name : 4

// }


//Create a Generic Function
function identity<T>(value : T): T{
    return value
}


identity<number>(10)
identity("hello")  // inferred as string
identity({a:1}) // inferred as object


// const x = identity(10)
// x.toUpperCase()   //error