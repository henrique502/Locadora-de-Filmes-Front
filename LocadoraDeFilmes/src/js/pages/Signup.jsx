import React from 'react';

const ImgLogo = require('../../img/logo.svg');

export default class Signup extends React.Component {
  render(){
    return (
      <div className="container">
      	<div className="row">
      		<div className="col-lg-4 col-sm-6 col-lg-offset-4 col-sm-offset-3">
            <div className="text-center logo">
              <img src={ImgLogo} width="200" height="200" role="presentation" />
            </div>
            <h2 className="text-center">Signup</h2>
          </div>
        </div>
      </div>
    );
  }
};
