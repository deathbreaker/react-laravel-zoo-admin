import React, { Component } from 'react';

import {
    Container,
    Card,
    CardColumns,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
} from 'reactstrap';
import Footer from '../../Footer';


import Navigation from '../../Navigation';
import LoaderIn from '../../Loader/LoaderIn';

export default class AnimalRegistry extends Component{

    state = {
        animals: []
    };


    componentDidMount() {
        axios.get("api/user/animals")
             .then( response => {
                 const animals = response.data;

                 this.setState({ animals });
             })
             .catch((error)  => {
                console.log(error)
             })
    }



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



        let listing =
        <div>
            <Navigation logoutLink="true"/>
            <Container className="mt-5">
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
                                <CardText>Počet: {animal.count }</CardText>
                                <Button color="success">Detail</Button>
                            </CardBody>
                        </Card>
                    )
                })
                }
                </CardColumns>
            </Container>
            <Footer/>
        </div>;

        return isLoading ? loader : listing;

    }

}