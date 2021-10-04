import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

// import model from '../../assets/models3d/ensamble_large_scoop.glb';
// import model from '../../assets/models3d/ensamble_rake.glb';
// import model from '../../assets/models3d/ensamble1_0FOV.glb';
import rake from '../../assets/models3d/Rake.glb';
import small_scoop from '../../assets/models3d/small_scoop.glb';
import big_scoop from '../../assets/models3d/big_scoop.glb';
import stem from '../../assets/models3d/stem.glb';
import extensionHandle from '../../assets/models3d/ExtensionHandle.glb';
import multitool from '../../assets/models3d/multitool.glb';

const models = [
  rake,
  small_scoop,
  big_scoop,
  stem,
  extensionHandle,
  multitool
];

function render(renderer, scene, camera) {
  renderer.render(scene, camera);
}

class ModelLoader2 extends Component {
  componentDidMount() {
    const { src } = this.props;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 105, window.innerWidth/window.innerHeight, 0.2, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    document.body.appendChild( renderer.domElement );
    this.mount.appendChild( renderer.domElement );
    const cModel = models[src] || models[0];

    camera.position.set(-1.8, -0.9, -2.7);
    camera.position.z = -2.7;
    new RGBELoader()
        .setDataType(THREE.UnsignedByteType)
        .load(
        "https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/textures/equirectangular/royal_esplanade_1k.hdr",
        function (texture) {
            const envMap = pmremGenerator.fromEquirectangular(texture).texture;
            scene.environment = envMap;
            const loader = new GLTFLoader();

            loader.load(
              cModel,
            function (gltf) {
                scene.add(gltf.scene);
                gltf.scene.scale.set(0.1,0.1, 0.1);
                gltf.scene.position.y = src === 3 ? 0 : src === 5 ? -10 : -50;
                render(renderer, scene, camera);
            }
            );
        }
        );

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", () => render(renderer, scene, camera)); // use if there is no animation loop
    controls.minDistance = 15;
    controls.maxDistance = 400;
    controls.target.set(0, 0, -0.2);
    controls.update();
  }
  render() {
    return (
      <div ref={ref => (this.mount = ref)} />
    )
  }
}

export default ModelLoader2;