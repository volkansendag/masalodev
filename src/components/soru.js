import React from 'react';
import { v4 } from 'uuid';


class Soru extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            point: 0,
            value: 0,
            message: "",
            data: props.data
        }
    }

    nextQuery = () => {
        var data = this.state.data;

        if (data.queries.length > data.index + 1) {
            data.index++;
            data.query = data.queries[data.index];
        }
        else {
            data.query = null;
        }

        this.setState({ ...this.state, data });

        return data.query;
    }

    change = (evt) => {
        var data = this.state.data;
        var message = this.state.message;
        var point = this.state.point;

        if (evt.target.value === data.query?.answer) {
            if (data.query?.point > 0)
                point += data.query.point;

            message = "Tebrikler soruyu bildiniz."
        } else {
            message = "Sanırım dersi dinlememişsin.";
        }

        this.setState({
            ...this.state,
            message, point, data: { ...data, query: null }
        });

        setTimeout(() => {
            this.nextQuery();
            this.setState(() => ({
                ...this.state,
                message: ""
            }))
        }, 2000);
    }

    render() {
        return <div className="Soru">
            <header className="Soru-Header">
                <p>{this.state.message}</p>
                {this.state.data.query ? <p className='query'>{this.state.data.query.title}</p> : <></>}
                <p className='query-options'>
                    {this.state.data.query?.options.map(option => {
                        return <label className='query-option' key={v4()}>
                            <input onChange={this.change} value={option} type="radio" name="soru" /> {option}
                        </label>
                    })}
                </p>
                {this.state.point >= 0 ? <p className='error'>Toplam Puan: {this.state.point}</p> : <></>}
            </header>
        </div>
    }
}

export default Soru;
