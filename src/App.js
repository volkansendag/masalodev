import React from 'react';
import "./App.css";
import data from "./data/queries.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Query from './components/query/query';

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
          <Route path="/" element={<Query data={this.state} />} />
        </Routes>
      </div>
    </Router>
  }
}

export default App;
