var axios = require('axios');
var querystring = require('querystring');
var Auth = require('../libraries/Auth.js');
var Config = require('./Config.js');
var _ = require('lodash');
var Helper = {};

Helper.request = function (method, url, params, callback) {
  method = method.toUpperCase();
  url = Config.endpointApi + url;

  if(Auth.isLogged()){
    if(method === 'POST'){
      url = url + '?token=' + Auth.getToken();
    } else {
      _.merge(params, {
          token: Auth.getToken()
      });
    }
  }

  params = querystring.stringify(params);
  var config = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  };

  var request = null;
  switch (method.toUpperCase()) {
    case 'GET': request = axios.get(url, params, config); break;
    case 'POST': request = axios.post(url, params, config); break;
    default: callback(null, {code: null, message:"Method inválido"}); return;
  }

  request.then(function (res) {
      if (res.status === 204) {
        callback(true, null);
      } else {
        callback(res.data, null);
      }
    });
  request.catch(function(error) {

    if ((error.response !== undefined) && (error.response.data !== undefined) && (typeof error.response.data === 'object')) {
        callback(null, error.response.data);
      } else {
        callback(null, {code: "-2000", message:"Falha de comunicação, por favor tente novamente."});
      }
  });
}

// Tratamento para a validação do input de CNPJ/CPF
Helper.replaceAll = function(str, find, replace) {
  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

// Function para pegar parametros na url
Helper.getParameterByName = function(name, url) {
    if (!url) {
      url = window.location.href;
    }

    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

Helper.emailIsValid = function (email) {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(email);
}


module.exports = Helper;
