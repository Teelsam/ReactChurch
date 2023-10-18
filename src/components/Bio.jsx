import React from 'react';//imports react functionality
import beehive from '../images/BeehiveAncient.jpg';

function Bio() {
    return (
        <section className='siteBio'>
            <p>Known as the Last Scholar of the Ancient World, St. Isidore is the patron saint of Programmers, the Internet and Students.He is also commonly depicted as being surrounded by bees or standing near bee hives. This is due to the story that as a young child, Isidores father saw young Isidore attracting bees with a mouthful of honey. This was a fortelling of Isidores future as a symbolic beehive of doctrinal teaching.  </p>
            <img src={beehive} alt="a handdrawn bee hive near a tree" id="beehive"></img>
        </section>
    )
}