import {React, Component} from 'react';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {WebGPURenderer} from 'three/examples/jsm/renderers/webgpu/WebGPURenderer';

class ThreeScene extends Component {
    componentDidMount() {
        const {canvasRef, gpu} = this.props;
        const {Scene, PerspectiveCamera} = THREE;
        this.scene = new Scene();
        this.loader = new GLTFLoader();
        const {load} = this.loader;

        load('../models/Basic Cube.gltf', gltf => {
           this.scene.add(gltf.this.scene);
        }, undefined, err => {
            console.log(err);
        });

        //Add renderer 
        this.renderer = new WebGPURenderer({
            alpha: true,
            preserveDrawingBuffer: true,
            canvas: canvasRef,
            context: gpu
        });

        this.renderer.autoclear = false;

        // The API directly updates the camera matrices.
        // Disable matrix auto updates so three.js doesn't attempt
        // to handle the matrices independently.
        this.camera = new PerspectiveCamera();
        this.camera.matrixAutoUpdate = false;

        // //Initialize WebXR session using 'immersive-ar'
        // const webXRInit = async () => {
        //     const session = await navigator.xr.requestSession('immersive-ar');
        //     session.updateRenderState({
        //         baseLayer: new XRWebGPULayer();
        //     })
        // }
        // webXRInit();
        
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