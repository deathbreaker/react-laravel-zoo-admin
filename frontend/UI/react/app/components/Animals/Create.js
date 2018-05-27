import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navigation from '../Common/Navigation';
import ajax from '../../utils/ajax';
import {
    Container,
    Button,
    Alert,
    Input
} from 'reactstrap';


class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            latinname: '',
            count: '',
            visibleErr: false
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const animal = {
            name: this.state.name,
            latinname: this.state.latinname,
            count: this.state.count
        };

        animal.name !== '' &&  animal.latinname !== '' && animal.count !== ''
        ? this.sendDataToServer(animal)
        : this.setState({visibleErr: true});

    }

    onDismiss = () => {
        this.setState({ visibleErr: false });
    };

    sendDataToServer(animal){
        ajax.post('user/animals', animal).then((response) => {
            this.props.history.push('/animals');
        });
    }

    handleNameChange = (e) => {
        const { value} = e.target ;
        this.setState({name: value});
    };

    handleLatinnameChange = (e) => {
        const { value} = e.target ;
        this.setState({latinname: value});
    };

    handleCountChange = (e) => {
        const { value} = e.target ;
        this.setState({count: value});
    };


    render(){
        return (
            <div>
                <Navigation/>
                <Container className="container-customized">

                <div className="row">
                   <div className="mt-7 col-md-2">
                       <Link to="/animals" className="btn btn-success">Zpět</Link>
                   </div>
                </div>

                <h2 className="mt-2">Create animal</h2>
                <br />

                        <Input name="name"
                               placeholder="Name .."
                               type="text"
                               className="form-control"
                               value={this.state.name}
                               onChange={this.handleNameChange}
                               minLength={10}
                        />
                        <br />
                        <Input name="latinname"
                               placeholder="Latin name .."
                               type="text"
                               className="form-control"
                               value={this.state.latinname}
                               onChange={this.handleLatinnameChange}
                               minLength={10}
                        />
                        <br />
                        <Input name="count"
                               placeholder="Count .."
                               type="number"
                               className="form-control"
                               value={this.state.count}
                               validate={{number: true}}
                               onChange={this.handleCountChange}
                        />
                        <br />

                        <Button onClick={() => this.handleSubmit(event)} type="submit" color="success">Update</Button>

                    <br />
                    { this.state.visibleErr &&
                        <Alert color="danger" isOpen={this.state.visibleErr} toggle={this.onDismiss}>
                            Please fill all information about animal !
                        </Alert>
                    }

                </Container>
            </div>
        )
    }
}
export default Create;