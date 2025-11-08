import { axiosInstance } from "../config/axiosinstance"


// api for my applicants
export  const getMyApplicantsApi = async(req, res)=>{
    try {
        const respones = await axiosInstance.get("/api/applicants/my-applicants");
        if(respones){
            return respones.data
        }

        
    } catch (error) {
        console.log("error fetching my applicants")
    }
};