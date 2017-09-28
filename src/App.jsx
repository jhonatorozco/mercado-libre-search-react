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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   createImage (item) {
    return <Product source={item.thumbnail} key ={item.id} 
    title={item.title} sold_quantity={item.sold_quantity} price={item.price}/>;
    }

    createImages (data) {
    return data.map(this.createImage);
    }

  handleChange(event) {
    var name= event.target.value
    this.setState({inputText: name});
  }

  handleSubmit(event) {
    var self = this;
    var link:string
    link=  url + this.state.inputText
    axios.get(link)
    .then(function(response){
      var dataAPI = response.data.results
       
      dataAPI.forEach(function(element) {
           element.thumbnail = self.convertImageSize(element.thumbnail,"big")
      })
      self.setState({products: dataAPI})
      
    })
    .catch(function(error){

    })
    event.preventDefault();
  }

  convertImageSize(imageURL:string, type:string):string{
    var newImageURL;
    if(type=="small"){
      newImageURL = imageURL.replace("-E.jpg","-I.jpg");
    }else if(type="big"){
      newImageURL = imageURL.replace("-I.jpg","-E.jpg");
      console.log(newImageURL);
    }
    return newImageURL;
  }


  //Creación del DOM virtual
  render(){
    return (
      <div className="container">
        <div class="w3-bar w3-green w3-border w3-padding">
            <a href="#" class="w3-bar-item w3-button w3-mobile">Mercado search @jhonatorozco</a>
            <form onSubmit={this.handleSubmit}>
                <input type='text' onChange={this.handleChange} value={this.state.inputText}  
                   class="w3-bar-item w3-input w3-white w3-mobile" placeholder="Busca tu producto.."/>
                <input type="submit" class="w3-bar-item w3-button w3-black w3-mobile" value="Ir" />
            </form>
        </div>
        <br/>
       
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