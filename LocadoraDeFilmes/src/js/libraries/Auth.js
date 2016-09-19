import Helper from '../configs/Helper.js';

export default class Auth {
  static login(email, password, callback) {
    callback = arguments[arguments.length - 1];

    if(localStorage.token && localStorage.userId > 0){
      if (callback){ callback(true, null); }
      this.onChange(true, null);
      return;

    } else {
      var params = {email: email, senha: password};
      Helper.request('post', '/api/login', params, function(data, error){
        var  status = false;
        if(error === null){
          status = true;
          localStorage.token = data.token;
          localStorage.userName = data.nome;
          localStorage.userId = data.id;
        }

        Auth.onChange(status, error);
        if (callback){ callback(status, error); }
      });
    }
  }

  static getId(){
    return localStorage.userIid;
  }

  static getUserName(){
    return localStorage.userName;
  }

  static getToken(){
    return localStorage.token;
  }

  static isLogged(){
    return (localStorage.token && localStorage.userId > 0) ? true : false;
  }

  static required(nextState, replace){
    if (Auth.isLogged() === false){
      replace({
        pathname: '/signin',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

  static onChange(){}
}
