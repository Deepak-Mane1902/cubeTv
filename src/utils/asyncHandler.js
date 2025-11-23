// export const asyncHandler =(reqHandler)=>{
//      return (req,res,next)=>{
//           Promise.resolve(reqHandler(res)).catch((err)=>{next(err)})
//      }
// }

export const asyncHandler = (reqHandler) => (req, res, next) => {
  Promise.resolve(reqHandler(req, res, next)).catch(next);
};