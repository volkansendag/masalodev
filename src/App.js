import React from 'react';
import "./App.css";
import data from "./data/queries.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Query from './components/query/query';

class App extends React.Component {

  render() {

    return <Router>
      <div className="content">
        <header>
          <nav>
            <a href="/">Tümü</a> {' '}
            <a href="/class/5">5. Sınıf</a> {' '}
            <a href="/class/6">6. Sınıf</a> {' '}

          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Query queries={data} />} />
          <Route path="/class/5" element={<Query queries={data.filter((p) => p.class === 5)} />} />
          <Route path="/class/6" element={<Query queries={data.filter((p) => p.class === 6)} />} />
        </Routes>
      </div>
    </Router>
  }
}

export default App;
