import { axiosInstance } from "../../config/axiosinstance";
import { addUser, removeUser } from "../Reducers/userSlice";

// signup api

export const userSignupApi = (Data) => async (dispatch) => {
    try {
        const respones = await axiosInstance.post("/api/user/signup", Data);
        if (respones) {
            console.log("User is Register")
            return respones.data.user
        }
    } catch (error) {
        console.log("error in signup api", error)
    }
};

// login api

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

// logout api

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