import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import ajax from '../utils/ajax';
import {Form} from 'reactstrap';

class NewAnimal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            latinname: '',
            count: '',
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const animals = {
            name: this.state.name,
            latinname: this.state.latinname,
            count: this.state.count
        };

        let uri = 'user/animals';

        ajax.post(uri, animals).then((response) => {
            this.props.history.push('/animals');
        });
    }

    handleNameChange = (e) => {
        const {name, value} = e.target ;
        this.setState({name: value});
    };

    handleLatinnameChange = (e) => {
        const {latinname, value} = e.target ;
        this.setState({latinname: value});
    };

    handleCountChange = (e) => {
        const {count, value} = e.target ;
        this.setState({count: value});
    };


    render(){
        return (
            <div>
                <Navigation/>
                <h1 className="mt-2">Create animal</h1>
                <div className="row">
                    <div className="mb-2 col-md-2">
                        <Link to="/animals" className="btn btn-success">Zpět</Link>
                    </div>
                </div>
                <div className="form-group">
                    <label id="name">Name</label>
                    <input name="name"
                           type="text"
                           className="form-control"
                           value={this.state.name}
                           onChange={this.handleNameChange} />
                </div>

                <div className="form-group">
                    <label id="latinname">Latin name</label>
                    <input id="latinname" type="text" className="form-control"
                           value={this.state.latinname}
                           onChange={this.handleLatinnameChange} />
                </div>

                <div className="form-group">
                    <label id="count">Count</label>
                    <input id="count" type="number" className="form-control"
                           value={this.state.count}
                           onChange={this.handleCountChange} />
                </div>

                <div className="form-group">
                    <button onClick={() => this.handleSubmit(event)} className="btn btn-success">Create</button>
                </div>
            </div>
        )
    }
}
export default NewAnimal;