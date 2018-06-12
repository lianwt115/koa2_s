var HttpResult=require('../../config/https')
var User = require("../model/user.js");

module.exports = {

    find : async function (query){

        var https=new HttpResult()

        await  User.findOne(query,function (err,result) {

            if (err){
                https.change(303,'err',err)
            } else{
                if (result)
                    https.changeData(result)
                else
                    https.change(201,'user not found',null)
            }
        })

        return https

    },

    save:async function (query){

        var https=new HttpResult()

        var user=new User()

        user.username=query.username
        user.userage=query.userage
        user= await  user.save()

        https.changeData(user)

        return https

    },

    delete:async function (query){
        var https=new HttpResult()
       await User.findOneAndDelete(query,function (err,result) {

           if (err){
               https.change(303,'err',err)
           } else{

               https.changeData(result)
           }

       })
        return https
    },
    updata:async function (query){
        var https=new HttpResult()
       await User.findOneAndUpdate(query,{userage:100},function (err,result) {

           if (err){
               https.change(303,'err',err)
           } else{
               if (result)
                   https.changeData(result)
               else
                   https.change(201,'user not found',null)
           }

       })
        return https
    },
    count:async function (query){
        var https=new HttpResult()
       await User.count({},function (err,count) {

           if (err){
               https.change(303,'err',err)
           } else{
               https.changeData(count)
           }

       })

        return https
    }

}
