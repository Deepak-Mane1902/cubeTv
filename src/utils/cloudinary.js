import {v2 as cloudinary } from 'cloudinary'
import fs from 'fs'


cloudinary.config({
     cloud_name:process.env.CLOUDINARY_NAME,
     api_key:process.env.CLOUDINARY_API_KEY,
     api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath)=>{
    try {
          if(!localFilePath)return null;

          //Upload File

          const response = await  cloudinary.uploader.upload(localFilePath,{
               resource_type:"auto"
          })

          //File upload Successful
          console.log("File is uploaded Sucessful",response.url)

    } catch (error) {
     
          fs.unlinkSync(localFilePath) //remove the local save temp file as the upload operation failed
          return null; 
    } 
}


cloudinary.v2.uploader.upload('https://upload.wikipedia.org/wikipedia/commons/a/ae/Olmpic_flag.jpg',
     {public_id:"olympic_flag"},
     {function(error,result){console.log(result)}}
)