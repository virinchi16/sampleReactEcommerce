import React from 'react';
import logo from './logo.svg';

class Item extends React.Component {
    constructor(props,state){
        super()
        this.props = props
        console.log(this.props)
        this.state = {
            count:this.props.data.count
        }
       }

       
    render(){
       return (
        <tr>
        <td scope="column">
          <img src={this.props.data.img} alt="" className="img-fluid z-depth-0 casvsdvsdv" />
        </td>
        <td>
          <h5 className="mt-3">
       <strong>{this.props.data.title}</strong>
          </h5>
          <p className="text-muted">{this.props.data.name}</p>
        </td>
        <td>{this.props.data.color}</td>
        <td />
       <td ><i className="fas fa-inr">₹ {this.props.data.price}</i></td>
        <td className="text-center text-md-left">
          {/* <span className="qty">{this.state.count}</span> */}
          <div className="btn-group radio-group ml-2" data-toggle="buttons">
          {
              this.state.count === 0 ? (
                  <button type="button" class="btn btn-primary btn-rounded" onClick={()=>{
                    var a = this.state.count +1
                    this.props.updateCart(this.props.data.itemID,a)
                    this.setState({count:a})
                }}>Add</button>
              ):(
                <div>
                    <a className="btn-floating btn-lg btn-primary" onClick={()=>{
                    var a = this.state.count > 0 ? this.state.count - 1 : 0
                    this.props.updateCart(this.props.data.itemID,a)
                    this.setState({count:a})
                }}>
                    <i className="fas fa-minus" ></i></a>
                <a className="btn-floating btn-lg btn-info">{this.state.count}</a>
                <a className="btn-floating btn-lg btn-primary" onClick={()=>{
                    var a = this.state.count +1
                    this.props.updateCart(this.props.data.itemID,a)
                    this.setState({count:a})
                }}><i className="fas fa-plus" ></i></a>
                </div>
              )
          }

          </div>
        </td>
        <td className="font-weight-bold">
          <strong className="fas fa-inr">₹ {this.state.count*this.props.data.price}</strong>
        </td>
      </tr>
        )            
    }
}

export default Item;