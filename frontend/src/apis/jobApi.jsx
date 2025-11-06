import { axiosInstance } from "../config/axiosinstance"

// create job post api
export const createJobpostApi = async (data) => {

    try {
        const respones = await axiosInstance.post("/api/job/create/post", data);
        if (respones) {
            return respones.data;
        }

    } catch (error) {
        console.log("error in create profile ", error);
    }

};


// get all job post api
export const getAllJobApi = async () => {

    try {
        const respones = await axiosInstance.get("/api/job/all/post");
        if (respones) {
            return respones;
        }

    } catch (error) {
        console.log("error in fetch job ", error);
    }

};