import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import ajax from '../utils/ajax';
import {Form} from 'reactstrap';

class EditAnimal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            latinname: '',
            count: '',
            status: "LOADING",
        };
    }

    componentDidMount(){
        console.log(this.props.match);
        ajax.get('/user/animals/' + this.props.match.params.id)
            .then(response => {
                this.setState({...response.data, status: "OK"});
            })
            .catch(function (error) {
                console.log(error);

                if(error.response.status === 404){
                    this.setState({
                        status: "NOT_FOUND"
                    })
                }
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        const animals = {
            name: this.state.name,
            latinname: this.state.latinname,
            count: this.state.count
        };

        let uri = 'user/animals/'+  this.props.match.params.id ;

        ajax.patch(uri, animals).then((response) => {
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
        if(this.state.status === "LOADING"){
            return <div>Loading.</div>
        }
        else if(this.state.status === "NOT_FOUND"){
            return <Redirect to={"/404"}/>
        }
        return (
            <div>
                <Navigation/>
                <h1 className="mt-2">Update Animal</h1>
                <div className="row">
                    <div className="mt-2 col-md-2">
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
                        <button onClick={() => this.handleSubmit(event)} type="submit" className="btn btn-success">Update</button>
                    </div>
            </div>
        )
    }
}
export default EditAnimal;