import React from 'react';
import Item from './Item'
import $ from 'jquery'
const items = [
    {
        "img": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "CHECK PRINT SHIRT",
        "price": 110,
        "color":'red',
        "itemID":"HEC50",
        "count":0
    },
    {
        "img": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "GLORIA HIGH LOGO SNEAKER",
        "price": 91,
        "color":'red',
        "itemID":"LOR50",
        "count":0
    },
    {
        "img": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "CATE RIGID BAG",
        "price": 94.5,
        "color":'red',
        "itemID":"ATE50",
        "count":0
    },
    {
        "img": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
        "name": "GUESS CONNECT WATCH",
        "price": 438.9,
        "color":'red',
        "itemID":"UES50",
        "count":0
    },
    {
        "img": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
        "name": "'70s RETRO GLAM KEFIAH",
        "price": 20,
        "color":'red',
        "itemID":"70s50",
        "count":0
    }
]
class Cart extends React.Component {
    constructor(props,state){
        super()
        var a = []
        this.props = props
        items.forEach(e=>{
            a.push(
                <Item data={e} updateCart={this.props.updateCart}/>
            )
        })
        this.state = {
            items:a
        }
       }

       componentDidMount(){
       
    }
    valChange=(e)=>{
        this.setState({items:[]})

        console.log(e.target.value)
        var serVal = e.target.value
        var a = []
        items.forEach(e=>{
            if(e.name.toLowerCase().includes(serVal.toLowerCase()) ){
                a.push(
                    <Item data={e} updateCart={this.props.updateCart}/>
                )
            }
        })
        this.setState({items:a})
    }
    render(){
       return (
        <div className="container z-depth-1 p-5 my-5">
        {/* Section: Block Content */}
        <section>
          {/* Shopping Cart table */}
            <div className="md-form mt-0">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.valChange} />
            </div>
          <div className="table-responsive">
            <table className="table product-table table-cart-v-1">
              {/* Table head */}
              <thead>
                <tr>
                    <th />
                  <th className="font-weight-bold">
                    <strong>Product</strong>
                  </th>
                  <th className="font-weight-bold">
                    <strong>Color</strong>
                  </th>
                  <th />
                  <th className="font-weight-bold">
                    <strong>Price</strong>
                  </th>
                  <th />
                  <th className="font-weight-bold">
                    <strong>Amount</strong>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {/* First row */}
                {
                    this.state.items
                }
                
                {/* First row */}
              </tbody>
              {/* Table body */}
            </table>
          </div>
          {/* Shopping Cart table */}
        </section>
        {/* Section: Block Content */}
      </div>
        )            
    }
}

export default Cart;