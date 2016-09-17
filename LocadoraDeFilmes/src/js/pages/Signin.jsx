import React from 'react';
import { Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { Link } from 'react-router'

const ImgLogo = require('../../img/logo.svg');

export default class Signin extends React.Component {
  getInitialState() {
    return {
      value: ''
    };
  }
  handleSubmit = function(event){
    event.prevetDefault();
    console.log('submit');
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
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
                  <FormGroup controlId="formEmail">
                    <ControlLabel>E-mail</ControlLabel>
                    <FormControl type="email" value={this.state.value} maxLength="60" autoCapitalize="off" onChange={this.handleChange} />
                    <FormControl.Feedback />
                  </FormGroup>
                  <FormGroup controlId="formPassword">
                    <ControlLabel>Senha</ControlLabel>
                    <FormControl type="password" value={this.state.value} maxLength="60" autoCapitalize="off" onChange={this.handleChange} />
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
