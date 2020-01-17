import React from "react";
import api from "../utils/api";
import AdsList from "./AdsList"
import { Navbar, Nav, Form   } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../css/styles.css';

const {getPhones } = api();

export default class Adverts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones:[],
    };
    
  }
  

  componentDidMount(){
  
    this.myTags();
    
  }
  
  
  myTags = () => {
    getPhones().then (phone => 
        this.setState({
            phones: phone,
            
          })
          
        );
        
}



  render() {
    const { phones } = this.state;

    return (
      <React.Fragment >
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Link to="/advert"><Navbar.Brand>
            <img
              src="https://es.seaicons.com/wp-content/uploads/2015/09/Online-Shopping-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="WallaKeep"
            />{' '}
            MyPhones
        </Navbar.Brand>
        </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">

    </Nav>
    <Nav>
    <Form inline>
            {/* <FormControl type="text" placeholder="Search" onKeyUp={this.search} className="mr-sm-2" /> */}
            
          </Form>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br/>
        {

            phones
            && 
            <AdsList phones={phones} />

        }
      </React.Fragment>
    );
  }
}
