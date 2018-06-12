var User = require("../model/user.js");

module.exports = {

    find : async function (query){

        console.log(query)

        var res = {
            code:201,
            message:'',
            data:{}
        }

        await  User.find(query,function (err,result) {

            if (err){
                res.message='err'
                res.data=err
                console.log(err)
            } else{

                res.code=200
                res.data=result

            }
        })

        // res.data = await User.find(query).exec()

        console.log(res)
        return res

    }

}
