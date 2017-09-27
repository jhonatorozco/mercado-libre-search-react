import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Product from './Product.jsx';

const url='https://api.mercadolibre.com/sites/MCO/search?q='
var link:string
var products:any=[]

class App extends Component {

  
  

  constructor(props) {
    super(props)
    this.state = {
      inputText: '' ,
      outputText: '',
      products: []
    }

    this.textChanged = this.textChanged.bind(this)
  }

   createImage (item) {
    return <Product source={item.thumbnail} key ={item.id} 
    title={item.title} sold_quantity={item.sold_quantity} price={item.price}/>;
    }

    createImages (data) {
    return data.map(this.createImage);
    }

  textChanged(event){
    var self = this;
    var link:string
    var name= event.target.value
    this.setState({outputText: name})
    this.setState({inputText: name})
    link=  url + this.state.inputText
    console.log(link)
    axios.get(link)
    .then(function(response){
      var dataAPI = response.data.results
      self.setState({products: response.data.results}) 
    })
    .catch(function(error){

    })
  }

  //Creación del DOM virtual
  render(){
    return (
      <div className="container">
      <input type='text' onChange={this.textChanged} value={this.state.inputText} />
        <br/>
        <a>Hi {this.state.outputText} Welcome to the page! </a>
        <div className="row">
          <div className="col-sm-12 text-center">
            
            {this.createImages(this.state.products)}
          
          </div>
        </div>
      </div>
    )
  }
}

export default App