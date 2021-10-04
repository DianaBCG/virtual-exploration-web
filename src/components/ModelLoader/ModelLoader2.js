import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

// import model from '../../assets/models3d/ensamble_large_scoop.glb';
// import model from '../../assets/models3d/ensamble_rake.glb';
// import model from '../../assets/models3d/ensamble1_0FOV.glb';
import model from '../../assets/models3d/prueba_escala_1_5.glb';

const models = [
  model,
]

function render(renderer, scene, camera) {
  renderer.render(scene, camera);
}

class ModelLoader2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { src } = this.props;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 105, window.innerWidth/window.innerHeight, 0.2, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    document.body.appendChild( renderer.domElement );
    this.mount.appendChild( renderer.domElement );

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
              models[src],
            function (gltf) {
                scene.add(gltf.scene);
                gltf.scene.scale.set(0.1,0.1, 0.1);
                gltf.scene.position.y = -50;
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