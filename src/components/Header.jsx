import React from 'react';//imports react functionality
import Isidore from '../images/Isidor_von_Sevilla.jpeg';
import '../styles/Header.css';
function Header() {
    return (
        <section className='header'>
            <h1 id="siteHeader">Welcome to Saint-Isidores</h1>
            <img id='isidoreImage' src={Isidore} alt="painting of Saint Isidore as Archbishop of Saville" ></img>
            <section className='headerBio'>
                <h2 id="siteSubHeader">Protector of Monks</h2>
                <p id="headerBio">Known as the Last Scholar of the Ancient World, St. Isidore is the patron saint of programmers, the Internet and students. He is also commonly depicted as being surrounded by bees or standing near bee hives. This is due to the story that as a young child, Isidore's father saw young Isidore attracting bees with a mouthful of honey. This was a sign of Isidores future as a symbolic beehive of knowledge. </p>
            </section>
        </section>
    )
}
export default Header;