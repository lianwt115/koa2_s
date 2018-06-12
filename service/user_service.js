var HttpResult=require('../config/https')
const UserDao = require('../db/dao/UserDao')

module.exports = {

    find : async function (query){

        var  https=await UserDao.find(query)

        return https
    },

    save:async function (query){
        //校验参数
        if (query.username && query.userage) {
            var  https = await UserDao.find(query)
            //是否存在人的信息相同
            if (https.data) {

                https.change(202,'user has exist',null)

            }else{
                //插入
                 https = await UserDao.save(query)
            }

        }else{
            return new HttpResult(203,'参数错误,参数见data',query)

        }

        return https
    },

    delete:async function (query){

        return await UserDao.delete(query)
    },

    updata:async function (query){

        return await UserDao.updata(query)
    },

    count:async function (query){

        return await UserDao.count(query)
    }

}