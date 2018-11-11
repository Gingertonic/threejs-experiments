// load cube face images
const loader = new THREE.CubeTextureLoader();
loader.setPath( 'images/' );

const textureCube = loader.load( [
  'gingertonic.jpeg', 'gingertonic.jpeg',
  'gingertonic.jpeg', 'gingertonic.jpeg',
  'gingertonic.jpeg', 'gingertonic.jpeg'
] );


// mixed type face materials
const cubeMaterials = [
  // right image
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/gingertonic.jpeg'), side: THREE.DoubleSide } ),
  // left orange
  new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load('images/gingertonic.jpeg'), side: THREE.DoubleSide } ),
  // top red
  new THREE.MeshPhongMaterial( { color: 0xADF442 }),
  // bottom green
  new THREE.MeshPhongMaterial( { color: 0xADF442 }),
  // front white
  new THREE.MeshPhongMaterial( { color: 0xF4AD42}),
  // back white
  new THREE.MeshPhongMaterial( { color: 0xF4AD42 })
]

// define item shape - width, depth, height
const geometry = new THREE.BoxGeometry( 3, 3, 3 );
// define item material with image array
const material = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: textureCube } );
// define item material with mixed material array
// const material = new THREE.MeshFaceMaterial( cubeMaterials );
// put them together to create a green cube
const cube = new THREE.Mesh( geometry, material );
// cube.rotation.x = 0.5;
cube.rotation.y = 0.5;


// add the cube to the scene
scene.add( cube );

// CUBE HAS BEEN MADE
