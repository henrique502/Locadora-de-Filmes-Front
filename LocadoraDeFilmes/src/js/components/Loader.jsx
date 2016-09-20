import React from 'react';

export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  setModalVisible(visible) {
    this.setState({visible: visible});
  }
  
  render(){
    return (
      <div className="modal-backdrop {this.state.visible ? '' : 'hidden'}" ref="loader">
        <div className="loader">
          <div className="spin"></div>
        </div>
      </div>
    );
  }
}
