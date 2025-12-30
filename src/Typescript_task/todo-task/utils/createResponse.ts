
import{ ApiResponse} from "../models/ApiResponse"

export function createResponse<T>(data : T):ApiResponse<T>{
    return {
        data,
         success : true
    }
}