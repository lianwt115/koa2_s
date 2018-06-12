
  class HttpResult {

    constructor(code = 200,message='ok',data={}){

        this.code = code;
        this.data = data;
        this.message = message;
    }

    change(code,message,data){
        this.code = code;
        this.data = data;
        this.message = message;
    }
    changeData(data){
        this.data = data;
    }
}

  module.exports = HttpResult