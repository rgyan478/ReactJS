import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App.js';
import './App.css';
import TodoItem from './Component/TodoItem';
import TodoForm from './Component/TodoForm';

class TodoList extends React.Component{
    constructor(){
        super();
        this.updateProduct=this.updateProduct.bind(this);
        this.addProduct=this.addProduct.bind(this);
        this.ApplyOffer=this.ApplyOffer.bind(this);
            this.state={
            products:[],
            Apple:"Apple",
            AppleCode:"AP1",
            ApplePrice:5.00,
            ApplePriceoffer:4.50,
            Coffee:"Coffee",
            CoffeeCode:"CF1",
            CoffeePrice:11.23,
            CoffeePriceoffer:11.23,
            FruiteJuce:"Fruit Juice",
            FruiteJuceCode:"FR1",
            fruitJuicePrice:3.11,
            fruitJuicePriceoffer:3.11,
            TotalAmount:0,
            UserRole:"CEO"
        }
    }

    ApplyOffer(e){
            e.preventDefault();
            this.state.UserRole=e.target.id;
            this.state.products=[];
    }

    addProduct(event){
    event.preventDefault();
    let products=this.state.products;
    let Applecount=0;
    let coffeecount=0;
    let fruitjuicecount=0;

    this.state.products.map((product,index)=>
    {
        if(product.code==="AP1" ){
            Applecount++;
        }
        else if(product.code==="CF1"){
            coffeecount++;
        }
        else if(product.code==="FR1"){
            fruitjuicecount++;
        }
    })

    let currnetProduct= event.target.id==="apple"
                        ?this.state.Apple:event.target.id==="coffee"
                        ?this.state.Coffee:event.target.id==="fruitejuce"
                        ?this.state.FruiteJuce:"";

    let currnetProductCode= event.target.id==="apple"
                        ?this.state.AppleCode:event.target.id==="coffee"
                        ?this.state.CoffeeCode:event.target.id==="fruitejuce"
                        ?this.state.FruiteJuceCode:"";

    let currentProductPrice=event.target.id==="apple"
                        ? Applecount>=2 && this.state.UserRole==="COO" ?this.state.ApplePriceoffer: this.state.ApplePrice:event.target.id==="coffee"
                        ? coffeecount>=2 && this.state.UserRole==="COO" ? this.state.CoffeePriceoffer: this.state.CoffeePrice:event.target.id==="fruitejuce"
                        ?  fruitjuicecount>=2 && this.state.UserRole==="COO" ?   this.state.fruitJuicePriceoffer: this.state.fruitJuicePrice:0;
    
        products.push({
            name:currnetProduct +' : $'+currentProductPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
            price:currentProductPrice,
            code:currnetProductCode

        })

        if(this.state.UserRole==="CEO"){
            products.push({
                name:currnetProduct +' : $'+ (0.00).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,"),
                price:0.00,
                code:currnetProductCode
            })  
        }
        this.setState({
            products:products
        })
        if(this.state.UserRole==="COO" )
        this.state.products.map((product,index)=>
        {
            if(Applecount>=2 && event.target.id==="apple")
                {
                        if(product.code==="AP1" ){
                        this.state.products[index].price= this.state.ApplePriceoffer;
                        this.state.products[index].name= this.state.Apple +' : $'+this.state.ApplePriceoffer.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    }
                }
            if(coffeecount>=2 && event.target.id==="coffee")
                {
                    if(product.code==="CF1"){
                    this.state.products[index].price= this.state.CoffeePriceoffer;
                    this.state.products[index].name= this.state.Coffee +' : $'+this.state.CoffeePriceoffer.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    }
                }
            if(fruitjuicecount>=2 && event.target.id==="fruitejuce")
                {
                    if(product.code==="FR1"){
                        product.price=this.state.fruitJuicePriceoffer
                        this.state.products[index].price= this.state.fruitJuicePriceoffer;
                        this.state.products[index].name= this.state.FruiteJuce +' : $'+this.state.fruitJuicePriceoffer.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    }
                }
        })

        this.state.TotalAmount=0;
        this.state.products.map((product,index)=>
        {
            this.state.TotalAmount+=product.price;
        })
        console.log("total :"+this.state.TotalAmount);
    }

    updateProduct(newValue){
        this.setState({
            currnetProduct:newValue.target.value,
        })
    }

    render()
    {
        return (<div className="App">
        <div className="App-header">
          <h1>TextMaster Supermarket</h1>
        </div>
        <p className="App-intro">
          Select Products to add your basket
        </p>
                <TodoForm 
                addProduct={this.addProduct}
                ApplyOffer={this.ApplyOffer}
                />
            <ul>
                {
                    this.state.products.map((product,index)=>
                    {
                        return <TodoItem key={index} 
                        details={product}
                        index={index}
                        />
                    })
                }
            </ul>
            <h1>{'$'+ this.state.TotalAmount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") } </h1>
            </div>
        )
    }
}

ReactDOM.render(<TodoList/>,document.getElementById('root'));