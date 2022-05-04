//libraries
import {React, Component} from 'react';
//components 
import ThreeScene from './ThreeScene';

class Canvas extends Component {
    render() {
        const {xrStart, canvasRef, gpu} = this.props;
        if (xrStart) {
            return (
                <canvas ref={canvasRef}>
                    <ThreeScene canvasRef={canvasRef} gpu={gpu}/>
                </canvas>
            );
        }
    }
}



export default Canvas;
