import React from 'react';
import "./App.css";
import Soru from "./components/soru";
import data from "./data/queries.json"


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      queries: data,
      query: data[0]
    }
  }


  render() {

    return <div className="App">
      <Soru data={this.state}></Soru>
    </div>

  }
}

export default App;
