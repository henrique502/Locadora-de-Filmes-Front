import React from 'react';
import { Navbar, Form, FormGroup, FormControl, Button, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';
import Helper from '../configs/Helper';

export default class Header extends React.Component {
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
      <Navbar className="navbar-fixed-top">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              Locadora de Filmes
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
              <NavItem eventKey={1} href="/">Filmes</NavItem>
              <NavItem eventKey={2} href="/alugados">Alugados</NavItem>
              <NavItem eventKey={3} href="/logoff">Sair</NavItem>
          </Nav>
          <Form onSubmit={this.handleSubmit}>
            <Navbar.Form pullRight>
              <FormGroup className="input-group">
                <FormControl type="text" placeholder="Procurar Filmes" value={this.state.value} onChange={this.handleChange} />
                <span className="input-group-btn">
                  <Button type="submit">
                    <Glyphicon glyph="search" />
                  </Button>
                </span>
              </FormGroup>
            </Navbar.Form>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
