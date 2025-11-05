import { axiosInstance } from "../config/axiosinstance"


export const createJobpostApi = async(data)=>{
    const respones = await axiosInstance.post("/api/job/create/post" , data);
    if(respones){
        return respones.data
    }
}