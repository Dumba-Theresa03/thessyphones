import React from 'react'
import Phones from '../pictures/Phone1.jpg'
import Case from '../pictures/Case1.jpg'
import Head from '../pictures/Head1.jpg'
import Pendrive from '../pictures/Pendrive1.jpg'

function products() {
  return (
    <div>
    <div className='firstrow'>
    <div className='card'>
<h2>smartphones</h2>
<img src={Phones} alt=""/>
<p>ghc800</p>
<button>Buy Me</button> 
</div>

<div className='card'>
<h2>smartphones</h2>
<img src={Phones} alt=""/>
<p>Ghc700</p>
<button>Buy Me</button>
</div>

    </div>
<div className='headphone'>
    <div className='card'>
<h2>headphones</h2>
<img src={Head} alt=""/>
<p>Ghc400</p>
<button>Buy Me</button>
</div>

<div className='card'>
<h2>headphones</h2>
<img src={Head} alt=""/>
<p>Ghc400</p>
<button>BuyMe</button>
</div>


    </div>
    <div className='case'>
    <div className='card'>
<h2>Case</h2>
<img src={Case} alt=""/>
<p>Ghc600</p>
<button>Buy Me</button>
</div>

<div className='card'>
<h2>Case</h2>
<img src={Case} alt=""/>
<p>Ghc600</p>
<button>Buy Me</button>
</div>

    </div>
    <div className='pendrive'>

    <div className='card'>
<h2>Pendrive</h2>
<img src={Pendrive} alt=""/>
<p>Ghc500</p>
<button>Buy Me</button>
</div>

<div className='card'>
<h2>Pendrive</h2>
<img src={Pendrive} alt=""/>
<p>Ghc500</p>
<button>Buy Me</button>
</div>

    </div>


    </div>
  )
}

export default products