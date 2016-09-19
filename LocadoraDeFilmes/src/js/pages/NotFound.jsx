import React from 'react';

const ImgLogo = require('../../assets/img/logo.png');

export default class NotFound extends React.Component {
  render(){
    return (
      <div className="container">
      	<div className="row">
      		<div className="col-lg-4 col-sm-6 col-lg-offset-4 col-sm-offset-3">
            <div className="text-center logo">
              <img src={ImgLogo} width="100" height="100" role="presentation" />
            </div>
            <h2 className="text-center">Página não encontrada</h2>
          </div>
        </div>
      </div>
    );
  }
};
