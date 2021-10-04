import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const canvas = document.querySelector("root");
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.25,
  20
);

init();
render();

function init() {
  camera.position.set(-1.8, 0.6, 2.7);

  new RGBELoader()
    .setDataType(THREE.UnsignedByteType)
    .load(
      "https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/textures/equirectangular/royal_esplanade_1k.hdr",
      function (texture) {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;

        scene.background = envMap; //used for the backdrop
        scene.environment = envMap; //for all the reflections and lighting

        // texture.dispose(); //we have processed the texture and so we dispose of it
        // pmremGenerator.dispose(); //we can stop the process since we have the envmap stored

        // once the envronment is ready we can load in the model
        const loader = new GLTFLoader();

        loader.load(
            // file,
            // "https://raw.githubusercontent.com/DianaBCG/be-safe-test/main/DamagedHelmet.gltf?token=AI4PFQ6YW55ROCJ73AL7SA3BLFFUK",
          "https://cdn.jsdelivr.net/gh/mrdoob/three.js@master/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf",
          function (gltf) {
            scene.add(gltf.scene);
            render();
          }
        );
      }
    );

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = THREE.sRGBEncoding;

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", render); // use if there is no animation loop
  controls.minDistance = 2;
  controls.maxDistance = 10;
  controls.target.set(0, 0, -0.2);
  controls.update();

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  render();
}

//

function render() {
  renderer.render(scene, camera);
}
