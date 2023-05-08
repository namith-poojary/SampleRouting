import React from 'react';
import image1 from './image/northen.JPG';
import image2 from './image/southern.JPG';
/*
// for sending more than one value(latitude+longitude) always use props
const hemispehredisplay =({latitude})=>
{
    const hs=latitude>0? 'Northern hemisphere':'Southern hemisphere' //...props.latitude>0? ...
    const picture=latitude>0? image1:image2; 
    console.log(latitude)
    return(
        <div>
        <div>hello from {hs}</div>
        <img src={picture} alt="images"/>
        <p>latitude: {latitude}</p>
        </div>
    )
}
export default hemispehredisplay;
*/

const hemiconfig={
    northern:{
        text:'Hello from Northern Hemisphere' ,
        picture:image1
    },

     southern:{
        text:'Hello from Southern Hemisphere',
        picture:image2
    }
}
    const hemispehredisplay =({latitude})=>
{
    const hs=latitude>0? 'northern':'southern' ;//...props.latitude>0? ...
    const {text,picture}= hemiconfig[hs]
    return(
        <div>
            <div class="ui equal width grid">
        <div class="equal width row">
        <div class="column"></div>
        <div class="column"> <h2>{text}</h2><p>latitude: {latitude}</ p></div>
        <div class="column"></div>
        </div>
        </div>
       <br></br>
        <img class="ui centered fluid image" src={picture} alt="images" style={{width:1000,height:400}}></img>
       
        </div>
        
    )
}
export default hemispehredisplay;