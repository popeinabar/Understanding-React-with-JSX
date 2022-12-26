import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
    return(
      <div className='div1'> 
       <h1>Kalvium Gallary</h1>
       <div className='img'> 
       {this.imageData().map((alt)=>{
        return <img src={alt.img} alt=""/> 
       })} </div>
       </div>
    )
  }
}
