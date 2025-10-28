const imageKit = require("imagekit");

const storageInstance = new imageKit({

    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL,

});

const sendFile = async(file, fileName)=>{

    try {
        const res = await storageInstance.upload({
            file,
            fileName,
            folder:"Resume"
        })

        return res
    } catch (error) {
        console.log("error in imagekit", error)
    }
}

module.exports = sendFile;