const router = require('koa-router')()
const fs = require('fs')
const path = require('path');
const  config=require('../config')
var HttpResult=require('../config/https')
router.post('/uploadfile', async (ctx, next) => {

    var result = new HttpResult()
    // 上传单个文件
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);

    var fileUploadPath=''

    if (file.name.endsWith('.jpg') || file.name.endsWith('.png') || file.name.endsWith('.bmp') || file.name.endsWith('.gif')){

        fileUploadPath = "images"
    } else{
        fileUploadPath = "upload"
    }

    let filePath = path.join(config.rootPath,"public/"+fileUploadPath) + `/${file.name}`;
    // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);

    result.changeData({path:fileUploadPath+"/"+file.name})

    return ctx.body = result;
});

module.exports = router