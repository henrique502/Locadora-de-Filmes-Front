/* Locacao Library */
var Response = function(res){
    this.success = function(data){
      if(data === true){
        statusCode = 204;
      } else {
        res.statusCode = 200;
        res.send(data);
      }
      res.end();
    };

    this.error = function(msg){
      res.statusCode = 400;
      res.send(msg);
      res.end();
    };
};

module.exports = Response;
