import React, { Component } from 'react'
import { Link } from 'react-router'
  
 class TestTwo extends Component {
 
 	render() {
 		return <div>
         This is the second route of the app!
         <br/> Go back?  <Link to='/'> Click here </Link>
         </div>
 	}
 
 }
 
 export default TestTwo