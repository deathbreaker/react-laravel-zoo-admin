import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import ajax from '../utils/ajax';

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
        const products = {
            name: this.state.name,
            latinname: this.state.latinname,
            count: this.state.count,
        };

        let uri = '/animals/'+  this.props.match.params.id ;

        axios.patch(uri, products).then((response) => {
            this.props.history.push('/animals');
        });
    }

    handleChange = (e) => {
        const {name, value} = e.target ;
        this.setState({[name]: value});
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
                <Navigation logoutLink={true}/>
                <h1>Update Item</h1>
                <div className="row">
                    <div className="mt-2 col-md-2">
                        <Link to="/animals" className="btn btn-success">Zpět</Link>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label id="name">Name</label>
                        <input name="name"
                               type="text"
                               className="form-control"
                               value={this.state.name}
                               onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label id="latinname">Latin name</label>
                        <input id="latinname" type="text" className="form-control"
                               value={this.state.latinname}
                               onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label id="count">Count</label>
                        <input id="count" type="text" className="form-control"
                               value={this.state.latinname}
                               onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default EditAnimal;