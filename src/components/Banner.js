import React from 'react';
import{Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';

import '../CSS/Banner.css';




const Banner =() =>{
  const [inputItems,setINputItems]=useState([])
  const [users,setUsers]=useState([])
  const [singleuser,setSingleUser]=useState('')
  useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => setUsers(data))  },[])
console.log(users)




    return(
<div className="banner">
  <div className="banner-info">
  <div className="container  mt-5">
  <div className="row">
       <div className="col-md-3">
        <input type="text" className="search-query form-control " placeholder="Search"  />
        
       </div>
       <div className="col-md-3">
         <select class="form-control" id="exampleFormControlSelect1">
         <option>Tunisia</option>
         <option>France</option>
         <option>Algérie</option>
         <option>4</option>
         <option>5</option>
        </select>
      </div>
      

      <div className="col-md-3">
        <select class="form-control " id="exampleFormControlSelect1">
        <option>Tunisia</option>
        <option>France</option>
        <option>Algérie</option>
        <option>4</option>
        <option>5</option>
        </select>
      </div>
        
        <div className="col-md-3">
        <Button className="btn w-70" >Search Expert</Button>
        </div>
    </div>
</div>
 </div>
 </div>

      
         
         
        
       
    )
}
export default Banner; 