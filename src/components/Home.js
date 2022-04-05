import React from 'react'
import phones from "../pics/Phone3.jpg"
import head from "../pics/Head3.jpg"
import Pendrive from "../pics/Pendrive3.jpg"
import Case from "../pics/Case3.jpg"
import { Link } from 'react-router-dom'




function Home() {
 return (
<div className='products'>
<div className='firstrow'>

<div className='card'>
<h2>smartphones</h2>
<img src={phones} alt=""/>
<p>we sell quality smart phones at affordable prices</p>
<button><Link to="/products">view phones</Link></button>

</div>


<div className='card'>
<h2>headphones</h2>
<img src={head} alt=""/>
<p>we sell quality smart phones at affordable prices</p>
<button><Link to="/products">view phones</Link></button>
</div>

</div>

<div className='second-row'>

<div className='card'>
<h2>Case</h2>
<img src={Case} alt=""/>
<p>we sell quality smart phones at affordable prices</p>
<button><Link to="/products">view phones</Link></button>
</div>

<div className='card'>
<h2>Pendrive</h2>
<img src={Pendrive} alt=""/>
<p>we sell quality smart phones at affordable prices</p>
<button><Link to="/products">view phones</Link></button>
</div>

</div>
</div>
 )
}

export default Home