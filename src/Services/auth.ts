import axios from "axios";
import { userModel } from "../Models/userModel";

class AuthFunctions {


    async login(username: string, password: string): Promise<string>{
        try{ 
            const { data } = await axios.post(`http://localhost:3040/api/auth/login`, {
                 username, password 
                });
                
            return data;
        } catch(e) {
            return ``;
        } 
    }
    async register( {firstName, lastName, email, phone, username, password} : userModel): Promise<string>{
        console.log({firstName, lastName, email, phone, username, password});
        
        try{ 
            const { data } = await axios.post(`http://localhost:3040/api/auth/register`, {
                firstName, lastName, email, phone, username, password
                });
                
            return data;
        } catch(e) {
            return ``;
        } 
    }
  
}
export const authFunctions = new AuthFunctions();
