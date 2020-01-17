import React from 'react';
import {Provider} from 'react-redux';
import List from "./components/List"
import DetailAd from "./components/DetailAd"
import ErrorBoundary from "./components/ErrorBundary"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
// import api from './utils/api'
import {Alert} from 'react-bootstrap';
import ReactSpinner from 'react-bootstrap-spinner'
import {fetchAds} from './store/actions'


export class App extends React.Component {


  loadAds = this.props.loadAds;
  
  render(){
    
    
    const {isFetching, err } = this.props;
    return(
      <div>
      <ErrorBoundary>
      <Provider store={this.props.store}>
        <Router>
          <Switch>
              <Route exact path="/" component={List} />
              <Route exact path="/detail/:adId" component={DetailAd} />
              <Route component={List}/>
          </Switch>
        </Router>
      </Provider>
			</ErrorBoundary>
      {isFetching && <ReactSpinner type="grow" color="info" size="60" />}
      {err && <Alert key="alert" variant="info"> {err}}</Alert>}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch)  {
  return{
    loadAds: () => dispatch(fetchAds()),
    
  }
}


function mapStateToProps(state)  {
  return{
      
      phones: state.phones,
      isFetching: state.ui.isFetching,
      err: state.ui.err
      
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);