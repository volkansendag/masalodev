import React from "react";
import { v4 } from "uuid";
import suffle from "../../_utils/functions";
import "./query.css";

class Query extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      point: 0,
      value: 0,
      message: ""
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  nextQuery = () => {
    var state = this.state;

    if (this.props.queries?.length > this.state.index) {
      state.index++;
    }

    this.setState({ ...state });
  };

  change = (option) => {
    var message = this.state.message;
    var point = this.state.point;
    var query = this.props.queries[this.state.index];

    if (query.answer === option) {
      if (query?.point > 0) point += query.point;

      message = "Tebrikler soruyu bildiniz.";
    } else {
      message = "Sanırım dersi dinlememişsin.";
    }

    this.setState({
      ...this.state,
      message,
      point
    });

    setTimeout(() => {
      this.nextQuery();
      this.setState(() => ({
        ...this.state,
        message: ""
      }));
    }, 2000);
  };

  render() {
    var query = this.state.message
      ? null
      : this.props.queries[this.state.index];

    return (
      <div className="query-wrapper">
        <p>{this.state.message}</p>
        {query ? <p className="query">{query.title}</p> : <></>}
        <p className="query-options">
          {suffle(query?.options).map((option) => {
            return (
              <label className="query-option" key={v4()}>
                <input
                  onChange={(e) => this.change(option)}
                  value={option}
                  type="radio"
                  name="soru"
                />{" "}
                {option}
              </label>
            );
          })}
        </p>
        {this.state.point >= 0 ? (
          <p className="error">Toplam Puan: {this.state.point}</p>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default Query;
