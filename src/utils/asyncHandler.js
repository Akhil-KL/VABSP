const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err));
    };
};


export {asyncHandler}


//this code is same as that of above using try and catch error
//const asyncHandler = (fn) => async (req,res,next) => {
//    try {
//        await fn(res,req,next)
//    } catch (error) {
//        res.status(err.code || 500).json({
//            status: false,
//            message: err.message
//
//        })
//    }
//}
