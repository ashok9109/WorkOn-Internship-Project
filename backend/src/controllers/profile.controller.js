

const profileController = async(req, res)=>{
    
    try {
         const { firstName, lastName, email, number, description, dob, age, gender, languages, qualification, experience } = req.body;

         
    } catch (error) {
        console.log("error in profile controller", error)
    }

}

module.exports = profileController;