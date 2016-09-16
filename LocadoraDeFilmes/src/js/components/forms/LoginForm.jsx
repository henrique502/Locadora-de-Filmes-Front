import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router'


class LoginForm extends React.Component {
  propTypes: {
    email: React.PropTypes.string.isRequired,
    senha: React.PropTypes.string.isRequired
  }






}


React.render(<Welcome />, document.getElementById('app'));

<div className="container">
  <div className="row">
    <div className="col-lg-4 col-sm-6 col-lg-offset-4 col-sm-offset-3">
      <div className="text-center logo">
        <img src={ImgLogo} width="200" height="200" role="presentation" />
      </div>
      <h2 className="text-center">Locadora de Filmes</h2>
      <div className="panel">
        <div className="panel-body">
          <div className="form-group has-feedback">
            <label className="control-label">E-mail</label>
            <input type="email" name="email" className="form-control" required="required" maxLength="60" autoCapitalize="off" />
            <span className="glyphicon glyphicon-envelope form-control-feedback" aria-hidden="true"></span>
          </div>
          <div className="form-group has-feedback">
            <label className="control-label">Senha</label>
            <input type="password" name="senha" className="form-control" required="required" maxLength="16" autoCapitalize="off" />
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div className="form-group">
              <Button type="submit" className="btn btn-color col-xs-12" onClick={this.close}>
                Acessar
              </Button>
          </div>
        </div>
        <div className="panel-footer">
          <Link to="/sign-in">Criar nova conta</Link>
        </div>
      </div>
    </div>
  </div>
</div>
