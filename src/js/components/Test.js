import React, { Component } from 'react'
import { Link } from 'react-router'
  
 class Test extends Component {
 
 	render() {
 		return <div>
         This is definitely a React app now!
         <br/> Lets checkout out page 2!
         <br/> <Link to='two'> Click here </Link>
         </div>
 	}
 
 }
 
 export default Test 