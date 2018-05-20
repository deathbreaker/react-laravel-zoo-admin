import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {
    Container,
    Card,
    CardColumns,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Row,
    Col,
    Pagination,
    PaginationItem,
    PaginationLink,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Form

} from 'reactstrap';
import Footer from './Footer';
import LoaderIn from './Loader/LoaderIn';
import ajax from '../utils/ajax';
import Navigation from './Navigation';

class AnimalRegistry extends Component{

    state = {
        animals: [],
        modal: false,
        name: null,
        latinname: null,
    };

    onChange = (e) => {
        const {name, value} = e.target ;
        this.setState({[name]: value});
    };


    componentDidMount() {
        ajax.get("/user/animals")
             .then( response => {
                 const animals = response.data;

                 this.setState({ animals });
             })
             .catch((error)  => {
                console.log(error)
             });
    }

    onDeleteSubmit = (event, id)  => {
        ajax.delete("/user/animals/" + id )
            .then( () => {
                this.props.history.push("/animals");
/*                const animals = [...this.state.animals];
                animals.splice(id, 1);
                this.setState({animals: animals})*/
            })
            .catch((error)  => {
                console.log(error)
            });
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onPutSubmit = (id) => {
        const {name, latinname} = this.state;
        return  ajax.patch('/user/animals/' + id, {name, latinname})
                    .then(() => {
                        this.props.history.push('/animals');
                    })
                    .catch((err) => {
                        console.log(err)
                    });
    };


    render(){
        const defaultImageUrl = 'http://www.zoozlin.eu';

        const animals = this.state.animals;
        let isLoading = !animals.length ;
        const imageStyle = "border border-circle";
        const noAnimalImageStyle = " bg-success no-animal-image";
        const noImage = "/fassets/images/seznam-zvirat/empty.jpg";

        const loader = <LoaderIn/>;
        const noAnimalImage =
            <div className={imageStyle + noAnimalImageStyle}>
                <span className="animal-icon text-center text-green ra ra-lion ra-rw"></span>
            </div>
        ;

        let listing = null;



        this.props.isAdmin ?
        listing =
        <div>
            <Navigation logoutLink="true"/>
                    <Container className="mt-5">
                        <Row>
                            <Col sm="12">
                                <CardColumns>
                                    { animals.map(animal => {
                                        return (
                                            <div>
                                                <Card key={animal.id} className="animal-card mt-3 ml-2 mb-2">
                                                    { animal.imageurl === noImage
                                                        ? noAnimalImage
                                                        :<CardImg className={ imageStyle + noAnimalImageStyle} top width="50%"
                                                                  src={ defaultImageUrl + animal.imageurl }
                                                                  alt="Card animal image cap"/>
                                                    }
                                                    <CardBody>
                                                        <CardTitle className="font-weight-bold"> { animal.name }</CardTitle>
                                                        <CardSubtitle> { animal.latinname }</CardSubtitle>
                                                        <CardText>Počet: {animal.count }</CardText>

                                                        <Button className="mr-2" color="success" onClick={this.toggle}>Update</Button>
                                                        <Button onClick={() => this.onDeleteSubmit(event,  animal.id)} type="submit" color="danger">Delete</Button>

                                                    </CardBody>


                                                </Card>
                                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                                    <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
                                                    <ModalHeader>Update the animal</ModalHeader>
                                                    <ModalBody className="mb-2">
                                                        <form className="form-horizontal" role="form" method="POST" onSubmit= {() => this.onPutSubmit(animal.id) }>

                                                            <div className="form-group">
                                                                <Col md={{size: 8, order: 2}}>
                                                                    <Input placeholder="edit name"
                                                                           type="text"
                                                                           className="form-control"
                                                                           ref="name" name="name"
                                                                           onChange={(() => this.onChange)}
                                                                           required
                                                                           autoFocus />
                                                                </Col>
                                                            </div>

                                                            <div className="form-group">

                                                                <Col md={{size: 8, order: 2}}>
                                                                    <Input placeholder="edit latin name"
                                                                           type="text"
                                                                           className="form-control"
                                                                           ref="age"
                                                                           ame="age"
                                                                           onChange={(() => this.onChange)}
                                                                           required autoFocus />
                                                                </Col>
                                                            </div>


                                                            <div className="form-group">
                                                                <div className="col-md-6 col-md-offset-4">
                                                                    <Button type="submit"
                                                                            color="success"
                                                                            className="align-self-center"
                                                                            onClick={this.toggle}>
                                                                        Update
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </ModalBody>
                                                </Modal>
                                            </div>
                                        )
                                    })
                                    }
                                </CardColumns>


                            </Col>
                        </Row>
                    </Container>
            <Footer/>
        </div>
        :
        <div>
                <Navigation logoutLink="true"/>
                <Container className="mt-5">
                    <Row>
                        <Col sm="12">
                            <CardColumns>
                                { animals.map(animal => {
                                    return (
                                        <Card key={animal.id} className="animal-card mt-3 ml-2 mb-2">
                                            { animal.imageurl === noImage
                                                ? noAnimalImage
                                                :<CardImg className={ imageStyle + noAnimalImageStyle} top width="50%"
                                                          src={ defaultImageUrl + animal.imageurl }
                                                          alt="Card animal image cap"/>
                                            }
                                            <CardBody>
                                                <CardTitle className="font-weight-bold"> { animal.name }</CardTitle>
                                                <CardSubtitle> { animal.latinname }</CardSubtitle>
                                                <CardText>Count: {animal.count }</CardText>

                                            </CardBody>
                                        </Card>
                                    )
                                })
                                }
                            </CardColumns>
                        </Col>
                    </Row>
                </Container>
                <Footer/>
        </div>
        ;

        return isLoading ? loader : listing;

    }

}

export default withRouter(AnimalRegistry);