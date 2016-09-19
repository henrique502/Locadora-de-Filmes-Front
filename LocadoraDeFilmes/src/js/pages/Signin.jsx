import React from 'react';
import { Button, FormControl, FormGroup, ControlLabel, Alert } from 'react-bootstrap';
import { Link } from 'react-router';
import Auth from '../libraries/Auth';
import Helper from '../configs/Helper';

const ImgLogo = require('../../assets/img/logo.png');

export default class Signin extends React.Component {
  constructor() {
    super();

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validEmail = false;
    this.validSenha = false;

    this.state = {
      email: 'henrique.rieger@gmail.com',
      senha: '123456',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.alert = this.refs.alert.value;
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.validEmail && this.validSenha && this.state.isLoading === false){
      this.setState({isLoading: true});
      var self = this;
      Auth.login(this.state.email, this.state.senha, function(status, msg){
        if(status){
          window.location = '/';
        } else {
          self.setState({isLoading: false});
          console.log(msg);
        }
      });
    }
  }

  getEmailValidationState(){
    const length = this.state.email.length;
    let status = null;
    if (length > 0){
      if(Helper.emailIsValid(this.state.email)){
        status = true;
      } else {
        status = false;
      }
    }

    this.validEmail = false;
    if(status === null) return null;
    if(status === true) {
      this.validEmail = true;
      return 'success';
    }
    return 'error';
  }

  getPasswordValidationState(){
    const length = this.state.senha.length;
    let status = null;

    if (length > 0){
      if (length >= 6 && length <= 12){
        status = true;
      } else {
        status = false;
      }
    }
    this.validSenha = false;
    if(status === null) return null;
    if(status === true){
      this.validSenha = true;
      return 'success';
    }
    return 'error';
  }

  handleChangeEmail(e) {
    this.setState({email: e.target.value });
  }

  handleChangeSenha(e) {
    this.setState({senha: e.target.value });
  }

  render(){
    return (
      <div className="container">
      	<div className="row">
      		<div className="col-lg-4 col-sm-6 col-lg-offset-4 col-sm-offset-3">
            <div className="text-center logo">
              <img src={ImgLogo} width="100" height="100" role="presentation" />
            </div>
            <h2 className="text-center">Autenticação</h2>
            <Alert bsStyle="danger" className="hidden" ref="alert"></Alert>
            <div className="panel">
              <div className="panel-body">
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="formEmail" className="has-feedback" validationState={this.getEmailValidationState()}>
                    <ControlLabel>E-mail</ControlLabel>
                    <FormControl type="email" maxLength="60" autoCapitalize="off" onChange={this.handleChangeEmail} />
                    <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                  </FormGroup>
                  <FormGroup controlId="formPassword" className="has-feedback" validationState={this.getPasswordValidationState()}>
                    <ControlLabel>Senha</ControlLabel>
                    <FormControl type="password" maxLength="12" autoCapitalize="off" onChange={this.handleChangeSenha} />
                    <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit" disabled={this.state.isLoading} className="btn btn-color col-xs-12" data-loading-text="Aguarde...">
                      Acessar
                    </Button>
                  </FormGroup>
                </form>
              </div>
              <div className="panel-footer">
                <Link to="/signup">Criar nova conta</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
