import { axiosInstance } from "../config/axiosinstance"

export const userProfile = async (Data) => {
    try {
        const res = await axiosInstance.post("/api/user/profile", Data);
        if (res) {
            console.log("profile data is saved");
        }
    } catch (error) {
        console.log("error in the user profile", error);
    }
}