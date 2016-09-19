import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';

export default class FilmeRow extends React.Component {
  constructor(id, src, titulo) {
    super();

    this.id = id;
    this.src = src;
    this.titulo = titulo;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        value: ''
    };
  }

  handleChange(e){
    this.setState({ value: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    window.location = "/?q=" + this.state.value;
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  render(){
    return (
      <Col xs={4} md={3}>
        <Thumbnail src="http://www.gstatic.com/tv/thumb/movieposters/11597936/p11597936_p_v8_aa.jpg" alt="242x200">
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
