import React from 'react';
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router'

var Helper = require('../configs/Helper.js')

const ImgLogo = require('../../img/logo.svg');

export default class Signin extends React.Component {

  constructor() {
    super();

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSenha = this.handleChangeSenha.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      senha: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('submit');
    console.log(this.state.email && this.state.senha);
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
    if(status === null) return null;
    if(status === true) return 'success';
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
    if(status === null) return null;
    if(status === true) return 'success';
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
              <img src={ImgLogo} width="200" height="200" role="presentation" />
            </div>
            <h2 className="text-center">Autenticação</h2>
            <div className="panel">
              <div className="panel-body">
                <form onSubmit={this.handleSubmit}>
                  <FormGroup controlId="formEmail"  validationState={this.getEmailValidationState()}>
                    <ControlLabel>E-mail</ControlLabel>
                    <FormControl type="email" maxLength="60" autoCapitalize="off" onChange={this.handleChangeEmail} />
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup controlId="formPassword"  validationState={this.getPasswordValidationState()}>
                    <ControlLabel>Senha</ControlLabel>
                    <FormControl type="password" maxLength="12" autoCapitalize="off" onChange={this.handleChangeSenha} />
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit" className="btn btn-color col-xs-12">
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
