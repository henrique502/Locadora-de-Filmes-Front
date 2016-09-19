var Auth = require('../libraries/Auth');
var Response = require('../libraries/Response');
var Usuario = require('../models/Usuario');

// Controller Login
var Login = function(req, res){

    var email = req.body.email;
    var senha = req.body.senha;

    var validateEmail = function(string){
        if(typeof string !== "string"){
            new Response(res).error("Preencha o campo e-mail.");
        }

        if(!Auth.validaEmail(string)){
            new Response(res).error("Forne\u00e7a um e-mail v\u00e1lido.");
        }

        return true;
    };

    var validateSenha = function(string){
        if(typeof string !== "string"){
            new Response(res).error("Preencha campo senha.");
        }

        if(string.length < 6 || string.length > 16){
            new Response(res).error("A senha deve ter de 5 a 16 caracteres.");
        }

        return true;
    };

    var login = function(err, usuario){
        if(err || usuario === null){
            new Response(res).error("E-mail e/ou senha inv\u00e1lidos.");
        } else {
            Auth.getToken(usuario, function(token){
                new Response(res).success({
                    token: token,
                    id: usuario.id,
                    nome: usuario.nome
                });
            });
        }
    };

    var init = function(){
        if(
            validateEmail(email) &&
            validateSenha(senha)
        ){
            new Usuario().getUsuarioByEmailSenha(email, senha, login);
        }
    };

    init();
};

module.exports = Login;
