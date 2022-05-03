import {React, Component} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

class ThreeScene extends Component {
    componentDidMount() {
        const {Scene} = THREE;
        this.scene = new Scene();
        this.loader = new GLTFLoader();
        const {load} = this.loader;
    }
    render() {
        return (
            <div ref={mount => this.mount = mount}>
                Three
            </div>
        )
    }
}

export default ThreeScene;