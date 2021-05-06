import React  from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useEffect, useState } from "react";
function CenterLayout() {
//  variable declarations -------
const [ var_data, set_data ] = useState("");
const [ var_copy_data, set_copy_data ] = useState("");
const [ var_tweet_data, set_tweet_data ] = useState("");
//  event listeners ------
useEffect(()=>{
API_get_Data()
}
,[]);
//  API calls --------
function API_get_Data(){
return axios.get('https://api.adviceslip.com/advice')
.then(
data =>{
set_data(data.data.slip)
}
)
}
//event function
function reloadData(){
API_get_Data();
}
function copyData(){
set_copy_data(var_data.advice)
}
function tweetData(){
console.log(var_copy_data)
set_tweet_data(var_copy_data)
}
return (
<div className="container">
   <h3 className="main-heading">Advice for the young at heart</h3>
   <p>{var_data.advice}</p>
   <img className="reload-icon" src="assets/reload.png" onClick ={()=> reloadData()}  />
   <div className="row btn-set">
      <Button className="btn-copy" color="primary" onClick = {()=>copyData()}>
      Copy
      </Button>
      <Button  color="primary" onClick = {()=>tweetData()}>
      Tweet
      </Button>
   </div>
   <h3 className="main-heading" >Your Tweet</h3>
   <p>{var_tweet_data}</p>
</div>
);
}
export default CenterLayout;