import React from 'react';


const usercard=(props)=>{
 console.log(props);
return(
<div className='ui card'>
<div className='content'>
<div className='header'>{props.statement}</div>
<div ><img src={props.image} alt="profilepicture" style={{width:200,height:100}}/></div>
  <div className='description'>
  {props.name}</div>
    <div className='ui button'>
        <i className='add icon'></i>Hello
    </div>
  
</div>
</div>

)
}
export default usercard;
