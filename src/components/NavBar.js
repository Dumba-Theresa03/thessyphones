import React from 'react'
import {TiDropbox} from "react-icons/ti"
import {Link} from "react-router-dom"

function NavBar() {
 return (
 <div className='header'>
<TiDropbox className='icon'/>
<h2>Thessy Phones and Accessories</h2>
<ul>
<li><Link to ="/">Home</Link></li>
<li><Link to ="/about">About us</Link></li>
<li><Link to ="/products">products</Link></li>
<li><Link to ="/contact">Contact Us</Link></li>


</ul>

 </div>
 )
}

export default NavBar