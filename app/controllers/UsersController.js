
import { registerService, loginService, profileReadService, logOutService } from "../service/UsersService.js";

//Register service
export const register =async(req,res)=>{

  let result = await registerService(req);
  return res.json(result)
  
}


//Login service
export const login =async(req,res)=>{

  let result = await loginService(req,res);
  return res.json(result)
  
}


//Profile read service
export const profileRead =async(req,res)=>{

  let result = await profileReadService(req);
  return res.json(result)
  
}


//Logout service
export const logout =async(req,res)=>{

  let result = await logOutService(req);
  return res.json(result)
  
}
