import React, {Component} from 'react';
import videoBG from './videoBGPerro.mp4';
class Fondo extends Component{

    render(){
        return(
        <video autoPlay loop muted>
          <source src = {videoBG} type = "video/mp4"/>
        </video>
        );
    }
}
export default Fondo;