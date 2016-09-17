var Helper = require('../configs/Helper.js')

var Auth = {
  login(email, password, callback) {
    callback = arguments[arguments.length - 1];

    if(localStorage.token){
      if (callback){ callback(true); }
      this.onChange(true, null);
      return;

    } else {
      var params = {email: email, senha: password};
      Helper.request('get', '/api/login', params, function(data, error){

        var status = (data.token) ? true : false;

        if(status){
          localStorage.token = data.token;
          localStorage.user = {
            id: data.id,
            nome: data.nome
          }
        }

        Auth.onChange(status, error);
        if (callback){ callback(status, error); }
      });
    }
  },

  getId(){
    return localStorage.user.id;
  },

  getUser(){
    return localStorage.user;
  },

  getToken(){
    return localStorage.token;
  },

  isLogged(){
    return (localStorage.user.id > 0);
  },

  required(nextState, replace){
    if (Auth.isLogged() === false){
      replace({
        pathname: '/signin',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  },

  onChange(){}
}

module.exports = Auth;
