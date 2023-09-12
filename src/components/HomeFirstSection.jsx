import React from 'react';
import Navcomp from '../components/Navcomp';
import "./HomeFirstSection.css"
import Truck from "../Images/Truck.png"
import { Link } from 'react-router-dom';

function  HomeFirstSection  ()  {
  return (
    <div className='firstsection-back'>
     
<div className='background-firstsection'>
    <div className='left-firstsection'>
        <h1 className='header-firstsection'>WATER 
            <br/>DISTRIBUTION</h1>
            <p className='parag-firstsection'>Delivery to all lebanese regions
</p>






    </div>

    <div className='right-firstsection'>

    <img className='truck-firstsection' src={Truck} alt="" />

    </div>


    




</div>

<div className='second-first-container'>

<div className='left-second-first'>
    <h1 className='left-second-header'> Supplying Clean, Clear Water</h1>
    <p className='parag-left-second'>A privately owned company specializing in bulk water delivery for a
multitude of uses including swimming pools, hot tubs, ponds, irrigation,
commercial construction, tank setting and clean-ups.</p>
</div>
<div className='right-second-first'>
    <Link className='links-home'  to="/Employment"><button className='right-second-first-button'>Seller</button></Link>
    <Link className='links-home' to="/Customer"> <button className='right-second-first-button'>Buyer</button></Link>

</div>






</div>




    </div>
  );
}

export default HomeFirstSection;
