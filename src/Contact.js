import React from 'react';
import './Menu.css'
import image1 from './image/contact_tennis.jpg'

const Contact=()=>
{
    return(
        <div>
             <img className="ui  centered image" src={image1} alt="images" style={{width:1200,height:450}}></img>
             <br></br>
             <div className="ui equal width grid">
        <div className="equal width row">
        <div className="column"></div>
        <div className="column">
        <i className="id card icon"></i><h3 >Organisation: ATP</h3> 
        <i className="phone icon"></i><h3>Contact Number: 98080890</h3>
        <i className="envelope icon"></i><h3>Contact Number: 97888879</h3></div>
        <div className="column"></div>
        </div>
        </div>
            
        </div>
    )
}
export default Contact;