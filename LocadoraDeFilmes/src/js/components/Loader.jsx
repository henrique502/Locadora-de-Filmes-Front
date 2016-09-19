import React from 'react';

export default class Loader extends React.Component {
  constructor() {
    super();

    this.state = {
        show: true
    };
  }



  render(){
    return (
      <div className="modal-backdrop fade {this.props.shouldHide ? 'hidden' : ''}in" ref="loader">
        <div className="loader">
          <div className="spin"></div>
        </div>
      </div>
    );
  }
}
