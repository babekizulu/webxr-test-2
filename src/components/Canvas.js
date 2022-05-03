//libraries
import {React, Component} from 'react';
//components 
import ThreeScene from './ThreeScene';

class Canvas extends Component {
    render() {
        const {xrStart, canvasRef} = this.props;
        if (xrStart) {
            return (
                <canvas ref={canvasRef}>
                    <ThreeScene/>
                </canvas>
            );
        }
    }
}



export default Canvas;
