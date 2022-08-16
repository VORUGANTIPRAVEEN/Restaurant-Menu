import React, { useState } from "react";
import "./App.css";
import data from "./Rest.json";
export default function App() {
  const[amount,setamount]=useState(0)
  const [count,setcount]=useState(0)
  const [area,setarea]=useState("Banani")
  const [pay,setpay]=useState('Card/Debit Card')
  function myfunction(a){
   setcount(count +1)
    setamount(amount + parseFloat(a));
  }
  return (
    <div className="App">
      <div>{data.array.type}</div>
      <h1>{data.array["restaurant-info"].name}</h1>
      <div>
        payment-methods :-
        <select onChange={e=>setpay(e.target.value)}>
          {data.array["restaurant-info"]["payment-methods"].map((d, id) => {
            return<option value={d.type} key={id}>{d.type}</option>;
          })}
        </select>
        <div className="Amount"> Total Amount is {amount}</div><br />
        <div  className="Amount">Total Number of Items is {count}</div><br />
        <div  className="Amount">payment Type {pay}</div><br />
        <div  className="Amount">Selected Area  {area}</div>
        <div>
        deliverable locations :-
        <select onChange={e=>setarea(e.target.value)}>
          {data.array["restaurant-info"]["deliverable-area"].map((d, id) => {
            return<option value={d.name} key={id}>{d.name}</option>;
          })}
        </select>
        <div>total-food-items here --{data.array["restaurant-info"]["total-food-items"]}</div>
        </div>
        <div>All Food categorys {data.array.categorys.map((datas,index)=>{
          return<div key={index}>
               <span className="Main_food">Food Name:{datas.name}</span><br />
               <div>Sub items{
                       datas["menu-items"].map((e,index)=>{
                        return<div className="All_items" key={index}>{e["sub-items"].map((d,index)=>{
                             return<div className="Items_div" key={index}>Name {d.name}--price {d.price} ₹--<button onClick={e=>myfunction(d.price)}>Add item</button></div>
                        })}</div>
                       })
                }</div>
            </div>
        })}</div>
      </div>
    </div>
  );
}
