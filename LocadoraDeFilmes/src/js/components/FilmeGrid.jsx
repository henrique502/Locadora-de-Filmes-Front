import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import FilmeRow from './FilmeRow.jsx';

export default class FilmeGrid extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  handleChange(e){
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return (
      <Grid>
        <Row>
          <FilmeRow />
          <FilmeRow />
          <FilmeRow />
          <FilmeRow />
          <FilmeRow />
          <FilmeRow />
        </Row>
      </Grid>
    );
  }
}
