import { axiosInstance } from "../config/axiosinstance";


export const getAllChatUserApi = async()=>{
    try {
        const respones = await axiosInstance.get("/api/message/all/chat-user");
        if(respones){
            return respones.data;
        }
    } catch (error) {
        console.log("error in fetching the chat user ", error);
    }
};