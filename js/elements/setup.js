const scene = new THREE.Scene();

//camera = new <TypeOfCamera>(fieldOfViewInDegrees, aspectRatio, nearClippingPlane, farClippingPlane)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// handle window resizes
window.addEventListener('resize', function(){
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})

// place the camera
camera.position.z = 8;

// basic orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement)
