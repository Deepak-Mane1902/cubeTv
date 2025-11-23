export const asyncHandler =(reqHandler)=>{
     (req,res,next)=>{
          Promise.resolve(reqHandler()).catch((err)=>{next(err)})
     }
}