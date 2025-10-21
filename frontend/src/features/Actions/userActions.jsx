import { axiosInstance } from "../../config/axiosinstance";
import { addUser, removeUser } from "../Reducers/userSlice";


export const userSignupApi = (Data) => async (dispatch) => {
    try {
        const respones = await axiosInstance.post("/api/user/signup", Data);
        if (respones) {
            dispatch(addUser(respones.data.user));
        }
    } catch (error) {
        console.log("error in signup api", error)
    }
};

export const userLoginApi = (Data) => async (dispatch) => {
    try {
        const respones = await axiosInstance.post("/api/user/login", Data)
        if (respones) {
            dispatch(addUser(respones.data.user));
        }
    } catch (error) {
        console.log("error in login api", error)
    }
};

export const userLogoutApi = ()=> async(dispatch)=>{
    try {
        const respones = await axiosInstance.post("api/user/logout");
        if(respones){
            dispatch(removeUser());
        }
    } catch (error) {
        console.log("error in logout api", error)
    }
}