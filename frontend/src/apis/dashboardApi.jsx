import { axiosInstance } from "../config/axiosinstance";


export const dashboardSummaryApi = async()=>{
    try {
        const respones = await axiosInstance.get("/api/dashboard/summary");
        if(respones){
            return respones.data
        }
    } catch (error) {
        console.log("error in dashboard summary api", error);
    }
}