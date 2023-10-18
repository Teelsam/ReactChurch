import React from 'react';//imports react functionality

function Navbar (props){
    const {setNewItem} = props;
    return (
        <section className='navbar'>
            <a href ="#" id ="homeAnchor" onClick={()=>  setNewItem("Home")}>Home</a>
            <a href ="#" id ="bioAnchor" onClick={()=>  setNewItem("Bio")}>About Us</a>
            <a href ="#" id ="contactAnchor" onClick={()=>  setNewItem("Contact")}>Contact</a>
            <a href ="#" id ="moreAnchor" onClick={()=>  setNewItem("More")}>Further Reading</a>
        </section>

    )
}

export default Navbar;