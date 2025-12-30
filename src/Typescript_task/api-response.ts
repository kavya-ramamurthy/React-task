interface ApiResponse<T>{
    data : T
    success : boolean
    error?: string
}


const response : ApiResponse<string> = {
    data : "OK",
    success: true
}




// const response1 : ApiResponse<number> = {
//     data : "wrong",
//     success : true
// }

//Type 'string' is not assignable to type 'number
