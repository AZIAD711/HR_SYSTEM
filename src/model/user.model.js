import { Schema, model } from "mongoose";
import {UserRole} from "../common/enum/role.js"
import { StatusAccount } from "../common/enum/status-account.js";
import { Provider } from "../common/enum/provider.js";
// USER SCHEMA 
const userSchema = new Schema({
    // FULL NAME 
    fullName : {
        type : String,
        trim : true,
        required : true,
        minlength : [3,"FULL NAME FIELD MIN LENGHT IS 3 !"]
    },
    // EMAIL
    email : {
        type : String,
        trim : true,
        required : true,
        unique : true,
    },
    // PASSSWORD
    password : {
        type : String,
        trim : true,
        required : true,
        minlength : [6,"PASSWORD FIELD MIN LENGHT IS 6 !"],
        maxlength : [6,"PASSWORD FIELD MAX LENGHT IS 6 !"],
        get(){
            return "******"
        }
    },
    // ROLE
    role : {
        type : String,
        enum : Object.values(UserRole),
        default:UserRole.USER
    },
    // STATUS
    status : {
        type : String,
        enum : Object.values(StatusAccount),
        default:StatusAccount.ACTIVE
    },
    // AVATAR
    avatar:{
        type : String,
        default : null
    },
    // PROVIDER
    provider:{
        type : String,
        enum : Object.values(Provider),
        default :Provider.OWN
    },


},
{
    timestamps : true,
    strict : true ,
    strictQuery : true,
    toJSON:{getters:true,virtuals:true},
    toObject:{getters:true,virtuals:true},
    collection:"user_data",
    versionKey:"version",
    optimisticConcurrency:true
}
)
const userModel = model("User",userSchema)
export default userModel