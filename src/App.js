import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import Cart from './Cart'
import swal from 'sweetalert';

import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
class App extends React.Component {
    constructor(state,props){
        super()
        this.state ={
            mainText : "Welcome",
            count :0,
            isLoggedIn:false,
            cart:{}
        }
    }
    checkLogin = () =>{
        return this.state.isLoggedIn ? (<ul className="navbar-nav ml-auto nav-flex-icons">
        <li className="nav-item"><a className="nav-link waves-effect"><span className="badge red z-depth-1 mr-1"> {this.state.count} </span><i id="navbar-static-cart" alt="Cart" className="fas fa-shopping-cart" /><span className="sr-only"> Cart </span></a></li>
        <li className="nav-item"><button type="button" class="btn btn-danger btn-rounded" onClick={this.logOut}>Logout</button></li>
      </ul>) : (<span id="c"></span>)
    }
    logOut=()=>{
        this.setState({
            cart:{},
            count:0,
            isLoggedIn:false
        })
    }
    loginCallBack=(e,p)=>{
        if(e==='admin' && p==='123'){
            this.setState({mainText:'Virinchi Uppalapati',isLoggedIn:true})
        }else{
            swal('sorry,','wrong data, please try again','error')
        }
    }
    updatecart=(id,num)=>{
        var cart = this.state.cart
        cart[id] = num
        if(num===0){
            delete  cart[id]
        }
       
        var count = Object.keys(cart).length
        this.setState({count:count})
    }
    
    render(){
       return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light grey lighten-3 d-block stisdHead">
        <div className="container">
          {/* Collapse button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapsible content */}
          <div className="collapse navbar-collapse mb-1" id="basicExampleNav">
            <a className="navbar-brand pt-0 pb-1" href="#"><b>{this.state.mainText}</b></a>
            {
                 this.checkLogin()
            }
          </div>
          {/* Collapsible content */}
        </div>
        </nav>
        {this.state.isLoggedIn?(<Cart updateCart={this.updatecart}/>):(<Login callback={this.loginCallBack}/>)}
      {/* Footer */}
      <footer className="page-footer font-small grey lighten-3 py-4 dark-grey-text stisdFoot">
        {/* Footer Elements */}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 className="font-weight-bold mb-0">Virinchi Uppalapati</h3>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled d-flex justify-content-center mb-0 mt-2">
                <li>
                  <a className="mx-3 text-primary" href="https://uvirinchi.com" target="_blank" role="button">About</a>
                </li>
                <li>
                  <a className="mx-3 text-primary" href="https://uvirinchi.com" target="_blank" role="button">Blog</a>
                </li>
                <li>
                  <a className="mx-3 text-primary" href="https://uvirinchi.com" target="_blank" role="button">Policy</a>
                </li>
                <li>
                  <a className="mx-3 text-primary" href="https://uvirinchi.com" target="_blank" role="button">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              {/* Copyright */}
              <div className="footer-copyright text-right bg-transparent dark-grey-text mt-2">© 2019.
                <a href="https://uvirinchi.com" target="_blank" className="dark-grey-text" > All rights reserved, Virinchi</a>
              </div>
              {/* Copyright */}
            </div>
          </div>
        </div>
        {/* Footer Elements */}
      </footer>
      {/* Footer */}
        </div>
       );
    }
}

export default App;