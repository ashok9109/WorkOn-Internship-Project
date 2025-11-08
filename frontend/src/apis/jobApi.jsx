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

// apply for job api
export const applyJobApi = async(postId)=>{
    try {
        const respones = await axiosInstance.post("/api/applicants/job/apply", postId);

        if(respones){
            console.log("applied successfully");
            return respones
        }
        
    } catch (error) {
        console.log("error applying job", error)
    }
};

// get a single job api
// export const singleJobApi = async()=>{
//     try {

//         const response = await axiosInstance.get("/api/job/single/post/")
        
//     } catch (error) {
//         console.log("error fetch single job api", error)
//     }
// }
