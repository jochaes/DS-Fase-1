import React, {Component} from 'react';
import styles from './FondoVideo.module.css'
import videoBG from './videoPerros2.mp4';

/**
 * Renderiza el video de fondo.
 */
class Fondo extends Component{

    render(){
        console.log(styles);
        return(
        <video className={styles.FondoVideo} autoPlay loop muted>
          <source src = {videoBG} type = "video/mp4"/>
        </video>
        );
    }
}
export default Fondo;