import Axios from 'axios';
import querystring from 'querystring';
import Auth from '../libraries/Auth.js';
import Config from './Config.js';
import _ from 'lodash';

export default class Helper {
  static request(method, url, params, callback) {
    method = method.toUpperCase();
    url = Config.endpointApi + url;

    if(Auth.isLogged() === true){
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
      case 'GET': request = Axios.get(url, params, config); break;
      case 'POST': request = Axios.post(url, params, config); break;
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
          callback(null, "Falha de comunicação, por favor tente novamente.");
        }
    });
  }

  // Tratamento para a validação do input de CNPJ/CPF
  static replaceAll(str, find, replace) {
    function escapeRegExp(str) {
      return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
  }

  // Function para pegar parametros na url
  static getParameterByName(name, url) {
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

  static emailIsValid(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(email);
  }
}
