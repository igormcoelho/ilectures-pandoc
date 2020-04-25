import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/controls/OrbitControls.js';
import {OBJLoader2} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/loaders/OBJLoader2.js';

// ========================================
// this won't work locally, thanks to CORS.
// ========================================
//import * as THREE from './js/build/three.module.js';
//import {OrbitControls} from './js/build/OrbitControls.js';
//import {OBJLoader2} from './js/build/OBJLoader2.js';


// pass canvas id and slider id (checkbox input id)
export function createRenderCanvas(canvasId, sliderId, pathToObj) {
  //
  var renderer; //= new THREE.WebGLRenderer({canvas});
  var camera; // = new THREE.PerspectiveCamera(fov, aspect, near, far);
  var scene; // = new THREE.Scene();
  //
  //const cbox = document.querySelector('#enable_canvas_c');
  const cbox = document.querySelector('#'+sliderId);
  //
  var idRender;
  function render() {
    if(cbox.checked)
      renderer.render(scene, camera);
    //idRender = requestAnimationFrame(render);
  }
  //
  //alert("will load!");
  //const canvas = document.querySelector('#c');
  const canvas = document.querySelector('#'+canvasId);
  //
  //document.getElementById('enable_canvas_c').checked
  //const renderer = new THREE.WebGLRenderer({canvas});
  renderer = new THREE.WebGLRenderer({canvas});
  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  //const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();
  // good for static objects
  controls.addEventListener( 'change', render );
  //
  //const scene = new THREE.Scene();
  scene = new THREE.Scene();
  scene.background = new THREE.Color('black');
  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    //scene.add(light);
  }
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);
  }
  {
    const objLoader = new OBJLoader2();
    //objLoader.load('https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj', (root) => {
    objLoader.load(pathToObj, (root) => {
      scene.add(root);
    });
  }
  //
  //requestAnimationFrame(render);
  //
  function clickSlider()
  {
    //alert("oi");
    if(cbox.checked)
      render();
    //else
    //  cancelAnimationFrame(idRender); // only useful for dynamic objects
  }
  cbox.addEventListener('click', clickSlider);
}

export function justSliderAlert(sliderId) {
  function clickSlider()
  {
    alert("oiSlider");
  }
  const cbox = document.querySelector('#'+sliderId);
  cbox.addEventListener('click', clickSlider);
}

export function createSwitch(str_id) {
var inp = document.querySelector('#cbx_'+str_id);
if(inp) return inp; // already created checkbox
var s = document.querySelector('#'+str_id);
var sp = document.createElement("SPAN");
sp.classList.add('slider');
sp.classList.add('round');
inp = document.createElement("INPUT");
inp.type="checkbox";
inp.id = "cbx_"+s.id;
s.appendChild(inp);
s.appendChild(sp);
//inp.addEventListener('click', clickSlider);
return inp; // return input object
};
/*
USAGE:
<label class="switch" id="myswitch"></label>
<script>
createSwitch('myswitch').addEventListener(
    'click',
    function() { alert("slider changed"); }
);
...
*/

//==========================

//c_main(); // setup model
//requestAnimationFrame(render); // not useful. must wait page full load.
/*
function clickSlider()
{
  alert("oi");
  if(cbox.checked)
    render();
  else
    cancelAnimationFrame(idRender); // only useful for dynamic objects
}
document.querySelector('#enable_canvas_c').addEventListener('click', clickSlider);
*/
