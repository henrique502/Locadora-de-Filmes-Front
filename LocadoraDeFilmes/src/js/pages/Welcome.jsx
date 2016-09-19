import React from 'react';
import Header from '../components/Header.jsx';
import Loader from '../components/Loader.jsx';
import FilmeGrid from '../components/FilmeGrid.jsx';
import Helper from '../configs/Helper.js';

export default class Welcome extends React.Component {
  constructor(){
    super();
    //this.makeRequest();
  }

  makeRequest(){
    let value = Helper.getParameterByName('q');
    let params = {}
    if(value !== null || value !== ''){
      params = {termo: value};
    }

    Helper.request('get', '/api/filmes/lista', params, this.populateGrid);
  }

  populateGrid(data, error){
    console.log(data);
  }

  render(){
    return (
      <div>
        <Header />
        <div className="container">
          <Loader />
        </div>
      </div>
    );
  }
};
