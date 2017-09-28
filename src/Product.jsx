import React from 'react';

let Product = function statelessFunctionComponentClass(props) {
  let source = props.source;
  let price = props.price;
  let sold_quantity = props.sold_quantity;
  let title = props.title;
  

  let styleImg = {
  	width: '250px',
    margin: '10px 5px 0px 5px'
  };

  let card = {
  	boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)',
    transition: '0.3s',
    display: 'inline-block',
    width: '300px',
    fontFamily: 'sans-serif'

  };

  let container ={
   	padding: '2px 16px',
   	width: '90%',
   	wordBreak: 'break-all'
   };

   let subtitle ={
   	color : '#009688'
   }

  return (

  	<div style={card}>
  		<img style={styleImg} src={source} />
  		<div style={container}>
   		 	<h4><b>{title}</b></h4> 
   		 	<p><span style={subtitle}>Precio: </span>COP ${price} </p> 
   		 	<p><span style={subtitle}> Cantidades vendidas: </span>{sold_quantity}</p> 
  		</div>
	</div>
    
  );
};

export default Product;