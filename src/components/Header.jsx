import React from 'react';//imports react functionality
import Isidore from '../images/Isidor_von_Sevilla.jpeg';
function Header() {
    return (
        <section className='siteBio'>
            <h1 id="siteHeader">Welcome to Saint-Isidores</h1>
            <h2 id="siteSubHeader">Protector of Monks</h2>
            <img src={Isidore} alt="painting of Saint Isidore as Archbishop of Saville" id='isidoreImage'></img>
        </section>
    )
}
export default Header;