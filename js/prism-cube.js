const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({alpha: false});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor( 0x0f0a00 )
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// handle window resizes
window.addEventListener('resize', function(){
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})


const loader = new THREE.CubeTextureLoader();
loader.setPath( 'images/' );

const textureCube = loader.load( [
  'gingertonic.jpeg', 'gingertonic.jpeg',
  'gingertonic.jpeg', 'gingertonic.jpeg',
  'gingertonic.jpeg', 'gingertonic.jpeg'
] );


// mixed type face materials
const grottoMaterials = [
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/grotto.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/grotto.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/grotto.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/grotto.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/grotto.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/grotto.png'), side: THREE.DoubleSide } )

  // new THREE.MeshPhongMaterial( { color: 0x000000, side: THREE.BackSide }),
  // new THREE.MeshPhongMaterial( { color: 0x000000, side: THREE.BackSide }),
  // new THREE.MeshPhongMaterial( { color: 0x000000, side: THREE.BackSide }),
  // new THREE.MeshPhongMaterial( { color: 0x000000, side: THREE.BackSide })
]

const scaleThisMaterials = [
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/scalethis.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/scalethis.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/scalethis.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/scalethis.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/scalethis.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/scalethis.png'), side: THREE.DoubleSide } )

  // new THREE.MeshPhongMaterial( { color: 0xADF442 }),
  // new THREE.MeshPhongMaterial( { color: 0xADF442 }),
  // new THREE.MeshPhongMaterial( { color: 0xF4AD42}),
  // new THREE.MeshPhongMaterial( { color: 0xF4AD42 })
]

const inspauralMaterials = [
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/inspaural.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/inspaural.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/inspaural.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/inspaural.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/inspaural.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/inspaural.png'), side: THREE.DoubleSide } )
  //
  // new THREE.MeshPhongMaterial( { color: 0x000000 }),
  // new THREE.MeshPhongMaterial( { color: 0x000000 }),
  // new THREE.MeshPhongMaterial( { color: 0x000000}),
  // new THREE.MeshPhongMaterial( { color: 0x000000 })
]

const bvMaterials = [
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/bv.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/bv.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/bv.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/bv.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/bv.png'), side: THREE.DoubleSide } ),
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/bv.png'), side: THREE.DoubleSide } )
  //
  // new THREE.MeshPhongMaterial( { color: 0x000000 }),
  // new THREE.MeshPhongMaterial( { color: 0x000000 }),
  // new THREE.MeshPhongMaterial( { color: 0x000000}),
  // new THREE.MeshPhongMaterial( { color: 0x000000 })
]

// define item shape - width, depth, height
const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const smallGeometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
// define item material with image array
const prismMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: textureCube } );
// define item material with mixed material array
const p1Material = new THREE.MeshFaceMaterial( grottoMaterials );
const p2Material = new THREE.MeshFaceMaterial( scaleThisMaterials );
const p3Material = new THREE.MeshFaceMaterial( inspauralMaterials );
const p4Material = new THREE.MeshFaceMaterial( bvMaterials );
// put them together to create a green cube
const cube = new THREE.Mesh( geometry, prismMaterial );
const p1Cube = new THREE.Mesh( smallGeometry, p1Material );
const p2Cube = new THREE.Mesh( smallGeometry, p2Material );
const p3Cube = new THREE.Mesh( smallGeometry, p3Material );
const p4Cube = new THREE.Mesh( smallGeometry, p4Material );

// cube.rotation.x = 0.5;
cube.rotation.y = 0.5;
p1Cube.position.x = 5;
p1Cube.position.z = 3;
p4Cube.position.x = -5;
p4Cube.position.z = -3;
p3Cube.position.y = 4;
p3Cube.position.z = 3;
p2Cube.position.y = -4;
p2Cube.position.z = -3;


// add the cube to the scene
scene.add( cube );
scene.add( p1Cube );
scene.add( p2Cube );
scene.add( p3Cube );
scene.add( p4Cube );

// CUBE HAS BEEN MADE

// ADD LIGHTING
const ambientLight = new THREE.AmbientLight(0xFFF7e2, 0.5)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xFFFFFF, 1.3)
spotLight.position.set( 15, 40, 35 );
spotLight.angle = Math.PI / 4;
spotLight.penumbra = 0.05;
spotLight.decay = 2;
spotLight.distance = 200;
scene.add(spotLight)


// place the camera
camera.position.z = 8;

// basic orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement)

// action to happen in scene refresh
const update = () => {
  // cube rotation
  cube.rotation.x += 0.005;
  cube.rotation.y -= 0.005;
  p1Cube.rotation.x -= 0.001;
  p1Cube.rotation.y += 0.001;
  p2Cube.rotation.x -= 0.001;
  p2Cube.rotation.y += 0.001;
  p3Cube.rotation.x -= 0.001;
  p3Cube.rotation.y += 0.001;
  p4Cube.rotation.x -= 0.001;
  p4Cube.rotation.y += 0.001;
  let time = Date.now() * 0.0005
  spotLight.position.x = Math.sin(time * 0.7)*30
  spotLight.position.y = Math.cos(time * 0.5)*40
  spotLight.position.z = Math.cos(time * 0.3)*30
}

// render function
const renderScene = () => {
  renderer.render( scene, camera );
}

// actually render the scene with 'render loop' aka 'animate loop'
// anything you want to move or change while the app is running has to go through the animate loop.
function animate() {
  requestAnimationFrame(animate);
  update()
  renderScene()
}

animate();
