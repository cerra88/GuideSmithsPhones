import React from 'react';
import '../css/bulma.css';
import '../css/styles.css';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {fetchSingleAd} from '../store/actions'

import { Nav, Navbar, Button, Form, FormControl  } from 'react-bootstrap';


// const { findAdByID } = api();

export class DetailAd extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
    
  }

  componentDidMount(){

    const adId = this.props.match.params.adId;
    this.props.loadAd(adId)    
  }
  

  
  

  render(){
    const ad  = this.props.detailAd;

    if(!ad){
      return null
    }
    
    return(
      <React.Fragment>
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
            <FormControl type="text" placeholder="Search" onKeyUp={this.search} className="mr-sm-2" />
            <Button variant="outline-info">New</Button>
          </Form>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
      {
        ad 
        &&
       
        <section className="section">
        <div className="container">
          <div className="columns is-desktop is-vcentered">
            <div className="column is-6-desktop"><img src={`http://localhost:3008/${ad.imageFileName}`} alt=""/></div>
            <div className="column is-6-desktop">
              <div className="level is-mobile">
                
              </div>
              <h2 className="title is-spaced">{ad.name}</h2>
              <h4 className="subtitle">{ad.description}</h4>
              <h5 className="specs">Specs</h5>
              
                <p className="color">Color: {ad.color}</p>
                <p className="sceen">Screen: {ad.screen}</p>
                <p className="processor">Color: {ad.processor}</p>
              
              
              

              
            
                <br></br>
              <div className="level is-mobile">
                <div className="level-left"><a className="level-item" href=".">
                    <div className="tag is-primary">&nbsp;</div></a><a className="level-item" href=".">
                    <div className="tag is-danger">&nbsp;</div></a><a className="level-item" href=".">
                    <div className="tag is-dark">&nbsp;</div></a><a className="level-item" href=".">
                    <div className="tag is-info">&nbsp;</div></a></div>
              </div>
              <div className="columns">
                <div className="column is-half">
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                      <label className="label">{ad.price}€</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">

                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <button className="button is-outlined">{ad.manufacturer}</button>
                        </div>
                      </div>
                      <div><Link to={`/advert`}> <Button variant="outline-secondary">GoBack</Button></Link></div>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="level is-mobile">
                <div className="level-left">
                  <div className="level-item"><a href=".">Add to favorites</a></div>
                </div>
                <div className="level-right">
                  {/* <div class="level-item">Share</div><a class="level-item" href="#"><img src="placeholder/icons/facebook-f.svg" alt=""/></a><a class="level-item" href="#"><img src="placeholder/icons/twitter.svg" alt=""/></a><a class="level-item" href="#"><img src="placeholder/icons/instagram.svg" alt=""/></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      }
     
     </React.Fragment>
    )}
  
  
}


function mapDispatchToProps(dispatch) {
  return {
    loadAd: id => dispatch(fetchSingleAd(id)),
  }
}


function mapStateToProps(state)  {
  return{
      user: state.user,
      isFetching: state.isFetching,
      detailAd: state.detailAd
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(DetailAd);


