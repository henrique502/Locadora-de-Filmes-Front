import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class ModalLogin extends React.Component {
  render(){
    return (
      <Modal show={true} onHide={this.close}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>aaaaa</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Logar</Button>
          <Button onClick={this.close}>Criar nova conta</Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

ModalLogin.propTypes = {
 modalShow: React.PropTypes.bool
};
ModalLogin.defaultProps = {
 modalShow: true
};
