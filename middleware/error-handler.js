const { CustomAPIError } = require("../errors/custom-error")
const errorHandlerMiddleware = (err,req,res,next) => {
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json( {msg: err.message} )
    }
    res.status(500).json( {msg: "Maintainance mode on"} )
}

module.exports = errorHandlerMiddleware