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

    change = (evt) => {
        var query = this.state.data.query;
        this.state.data.query = null;

        if (evt.target.value == "true") {
            if (query?.point > 0)
                this.state.point += query.point;

            if (this.state.data.queries.length > this.state.data.index + 1) {
                this.state.data.index++;
                query = this.state.data.queries[this.state.data.index];
                this.state.message = "Tebrikler soruyu bildiniz."
            } else {
                query = null;
                this.state.message = "Tebrikler testi tamamladınız."
            }
        } else {
            this.state.message = "Sanırım dersi dinlememişsin.";
        }

        this.setState(this.state);

        setTimeout(() => {
            this.state.message = "";
            this.state.data.query = query;
            this.setState(this.state);
        }, 2000);
    }

    render() {
        return <div className="Soru">
            <header className="Soru-Header">
                {this.state.point > 0 ? <p>Toplam Puan: {this.state.point}</p> : <></>}
                <p>{this.state.message}</p>
                {this.state.data.query ? <p>{this.state.data.query.title}</p> : <></>}
                {this.state.data.query?.options.map(option => {
                    return <label key={v4()}>
                        <input onChange={this.change} value={option.value} type="radio" name="soru" /> {option.text}
                    </label>
                })}
            </header>
        </div>
    }
}

export default Soru;
