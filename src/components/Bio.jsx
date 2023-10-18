import React from 'react';//imports react functionality
import beehive from '../images/BeehiveAncient.jpg';

function Bio() {
    return (
        <section className='siteBio'>
            
            <img src={beehive} alt="a handdrawn bee hive near a tree" id="beehive"></img>
        </section>
    )
}
export default Bio;