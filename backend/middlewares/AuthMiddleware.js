const {verify} = require("jsonwebtoken")


const validateToken = (req, res, next) => {
    const token = req.header("accessToken")

    if(!token) {
        return res.json({
            error: "Log in to make this action"
        })
    }

    try {

        const validToken = verify(token, "randomsecret")
        if(validToken) {
            req.user = validToken
            return next();
        }

    } catch(err) {
        return res.json({
            error: err
        })
    }
}

module.exports = {validateToken}