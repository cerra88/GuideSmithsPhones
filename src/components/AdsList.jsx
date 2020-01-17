import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../css/styles.css';


//import Movie from '../Movies/Movies'


export default class AdsList extends Component {
   

render() {

    return (
    <React.Fragment>
            
                <div className="card-grid">
                {this.props.phones.map(phone => (
                    
                <Card key={phone._id} style={{flex: 1, width: 350}}>
                    <Link to={`detail/${phone._id}`} className="card-header-title"> <Card.Img variant="top" fluid='true' src={`http://localhost:3008/${phone.imageFileName}`     } /> </Link>
                    
                    <Card.Body>
                        <Link to={`/detail/${phone._id}`} className="card-header-title"><Card.Title>{phone.name}</Card.Title> </Link>
                        <Card.Text>{ phone.description.substring(0,50) } <Link to={`/detail/${phone._id}`}>...read more </Link> </Card.Text>
                        
                        <Card.Text>{phone.price}€</Card.Text>
                        
                        {/* <Link to={`/editnew/${phone._id}`}><Card.Text><Button variant="outline-primary">EDIT</Button></Card.Text></Link> */}
                        {/* <ButtonToolbar>
                        {
                            ad.tags.map(tag => (
                            
                            <Button key={tag} className="tagButton" variant="outline-secondary"  size="sm">{tag}</Button>
                            ))
                            
                        
                        }
                        </ButtonToolbar> */}
                    </Card.Body>
                    <Button className="adTypeButton" variant="outline-secondary" >{phone.manufacturer}</Button>
                    <Card.Footer>
                        <small className="text-muted">Brand: {phone.manufacturer}</small>
                        <br></br>
                    </Card.Footer>
                </Card>
               ))}
                </div>
            
    </React.Fragment>
  );
  }





}