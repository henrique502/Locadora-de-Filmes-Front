import React from 'react';
import Helmet from "react-helmet";

export default class App extends React.Component {

  componentDidMount(){
    console.log(localStorage);
  }

  render() {
    return (
      <Helmet
        titleTemplate="%s | Locadora de Filmes"
        defaultTitle="Locadora de Filmes Website"
        >
        <div className="App">

        </div>
      </Helmet>
    );
  }
}
