//libraries
import {React, Component, createRef} from 'react';
//components
import Canvas from './components/Canvas';
import StartBtn from './components/StartBtn';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {xrStart : false}
        this.canvasRef = createRef();
    }

    activateXR = () => {
        this.setState({xrStart : true});
    };

    componentDidMount() {
        this.gpu = this.canvas.current.getContext('webgpu', {xrCompatible : true});
    } 
    
    render() {
        const {xrStart} = this.state;
        return (
            <div>
                <Canvas xrStart={xrStart} canvasRef={this.canvasRef} gpu={this.gpu}/>
                <StartBtn activateXR={this.activateXR}/>
            </div>
        );
    };
};

export default App;