import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';
import Helper from '../configs/Helper';

export default class FilmeRow extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    var value = Helper.getParameterByName('q');

    this.state = {
        value: value ? value : ''
    };
  }

  handleChange(e){
    this.setState({ value: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    window.location = "/?q=" + this.state.value;
  }

  render(){
    return (
      <Col xs={6} md={4}>
        <Thumbnail src="https://react-bootstrap.github.io/assets/thumbnaildiv.png" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>
            <Button bsStyle="primary">Button</Button>
            &nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Col>
    );
  }
}
