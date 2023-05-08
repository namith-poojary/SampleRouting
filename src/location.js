import React from 'react';
import HemispehreDisplay from './hemisphereDisplay';

class Location extends React.Component
{

  state={latitude:null,errorMessage:''}  
 componentDidMount()
 {
   //this is from nework api(chrome inspect)
  window.navigator.geolocation.getCurrentPosition(
    (position) =>  {this.setState({latitude:position.coords.latitude})}, 
     (error) => {this.setState({errorMessage:error.message})
    });
   console.log("didmount")
 }
 componentDidUpdate()
 {
  console.log("didupdate")
 }
  render()   //mount+updation
  {
      if(this.state.errorMessage && !this.state.latitude)
      {
        return(
          <div>
            { this.state.errorMessage}
            </div>
        )
      }
      if(!this.state.errorMessage && this.state.latitude)
      {
        return(
          <div>
            <HemispehreDisplay latitude={ this.state.latitude}/>
            </div>
        )
      }
      else{
        return <div>Loading</div>
      }
  }
}

export default Location;