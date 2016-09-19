import React from 'react';
import Header from '../components/Header.jsx';
import FilmeGrid from '../components/FilmeGrid.jsx';

export default class Welcome extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <div className="container">
          <FilmeGrid />
        </div>
      </div>
    );
  }
};
