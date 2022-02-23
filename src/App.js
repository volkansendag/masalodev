import React from 'react';
import "./App.css";
import Soru from "./components/soru";
import data from "./data/queries.json"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from './components/about';

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

    return <Router>
      <div className="content">
        {/* <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/soru">Soru</Link>
              </li>
            </ul>
          </nav>
        </header> */}
        <Routes>
          {/* <Route path="/soru" element={<About data={this.state} />} /> */}
          <Route path="/" element={<Soru data={this.state} />} />
        </Routes>
      </div>
    </Router>

    // return <div className="App">
    //   <Soru data={this.state}></Soru>
    // </div>

  }
}

export default App;
