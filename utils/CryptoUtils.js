var crypto=require('crypto');
var md5=crypto.createHash("md5");

class CryptoUtils{

    constructor(content){

        this.contnet = content

        this.data = ''
    }

   getMD5(){

       md5.update(this.contnet);
       var str=md5.digest('hex').toUpperCase()

       return str
   }

}

module.exports = CryptoUtils








