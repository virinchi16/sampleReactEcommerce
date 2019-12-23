import React from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends React.Component {
    constructor(props,state){
        super()
        this.props = props
        console.log(this.props,state)
        this.state={
            email:'',
            password:''
        }
    }       

    sample(){
        console.log('savvsd')
    }
     render() {
        
        return ( 
            <div className="container my-5 px-0 z-depth-1">
            {/*Section: Content*/}
            <section className="p-5 my-md-5 text-center" style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Others/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
              <form className="my-5 mx-md-5" action>
                <div className="row">
                  <div className="col-md-6 mx-auto">
                    {/* Material form login */}
                    <div className="card">
                      {/*Card content*/}
                      <div className="card-body">
                        {/* Form */}
                        <h3 className="font-weight-bold my-4 pb-2 text-center dark-grey-text">Log In</h3>
                        {/* Name */}
                        <input type="email" id="defaultSubscriptionFormPassword" className="form-control mb-4" placeholder="Email" onChange={(e)=>{
                            this.setState({email:e.target.value})
                        }} />
                        {/* Email */}
                        <input type="password" id="defaultSubscriptionFormEmail" className="form-control" placeholder="Password" onChange={(e)=>{
                            this.setState({password:e.target.value})
                        }}/>
                        <small id="passwordHelpBlock" className="form-text text-right blue-text">
                          <a href>Recover Password</a>
                        </small>
                        <div className="text-center">
                          <button type="button" className="btn btn-outline-orange btn-rounded my-4 waves-effect" onClick={()=>{this.props.callback(this.state.email,this.state.password)}}>Login</button>
                        </div>
                        {/* Form */}
                      </div>
                    </div>
                    {/* Material form login */}
                  </div>
                </div></form>
            </section>
            {/*Section: Content*/}
          </div>
        );
    }
}

export default Login;