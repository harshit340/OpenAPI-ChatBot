/* eslint-disable @typescript-eslint/no-unused-vars */

import {useEffect,useState ,ReactNode, createContext, useContext } from 'react'
import { checkauthentication, loginUser } from '../helper/api-communication';
type User = {
    name: string;
    email: string;
};


type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    //functionality
    login: (email: string, password:string) => Promise<void>;
    signup: (name : string, email: string , password:string)=> Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth|null>(null);

export const AuthProvider = ({children} : {children:ReactNode})=>{
   const [user,setUser] = useState<User | null>(null);
   const [isLoggedIn,setIsLoggedIn] = useState(false);
   
 // to check authentication and remain login for the user
   useEffect(()=>{
   async function checkstatus() {
    const data = await checkauthentication();
    if(data){
        setUser({email:data.email ,name:data.name});
        setIsLoggedIn(true);
    }
   } checkstatus();
   },[]);

   const login = async (email: string, password:string) => {
    const data = await loginUser(email,password);
    if(data){
        setUser({email:data.email ,name:data.name});
        setIsLoggedIn(true);
    }
   };

   const signup = async (name : string, email: string , password:string) => {};
   
   const logout = async ()=> {};
 
   const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
   };
   return <AuthContext.Provider value = {value}>{children}</AuthContext.Provider>
};


export const useAuth = () => useContext(AuthContext);
