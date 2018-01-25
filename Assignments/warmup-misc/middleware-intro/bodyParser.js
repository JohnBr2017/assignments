module.exports = {
    json: ()=>{
        return (req, res, next)=>{
            req.body = JSON.stringify("data")
        }
    },
    xml: ()=>{

    }
}