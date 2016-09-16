var axios = require('axios');
var querystring = require('querystring');
var sessionStore = require('./stores/sessionStore');
var _ = require('lodash');
var Helper = {};


Helper.executeRequest = function (url, params, callback) {

  var config = {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  };

  axios.post(url, querystring.stringify(params), config)
    .then(function (res) {
        if (res.status === 204) {
          callback(true, null);
        } else {
          callback(res.data, null);
        }
      })
    .catch(function (error) {

      if ((error.response !== undefined) && (error.response.data !== undefined) && (typeof error.response.data === 'object')) {
          callback(null, error.response.data);
        } else {
          var error = {code: "-2000", message:"Falha de comunicação, por favor tente novamente."};//ERRO -2000 significa que não foi retornado erro do backend
          callback(null, error);
        }
    });
}

// mockup-server c/ validação de userSessionToken
Helper.executeRequestWithToken = function (url, params, callback) {

  var userSessionToken = sessionStore.getSessionToken();

  if ((!userSessionToken) || (userSessionToken === '')){
    return;
  }else{
    _.merge(params, {
        userSessionToken: userSessionToken
    });

    Helper.executeRequest(url, params, callback);
  }
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
