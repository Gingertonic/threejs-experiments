//NB: materials must be of one of types: Phong (gloss) / Lambert (matte) to be affected by light

// create new AmbientLight(colour, intensity)
const ambientLight = new THREE.AmbientLight(0xFFF7e2, 1)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xFFFFFF, 1.2, 200)
// scene.add(pointLight)

const directionalLight = new THREE.DirectionalLight(0xADF442, 1.2)
directionalLight.position.set(0, 60, 0.5)
// scene.add(directionalLight)

const spotLight = new THREE.SpotLight(0xFFFFFF, 1.3)
spotLight.position.set( 15, 40, 35 );
spotLight.angle = Math.PI / 4;
spotLight.penumbra = 0.05;
spotLight.decay = 2;
spotLight.distance = 200;
scene.add(spotLight)


// to make them move!
  // within update function:
  let time = Date.now() * 0.0005
  pointLight.position.x = Math.sin(time * 0.7)*30
  pointLight.position.y = Math.cos(time * 0.5)*40
  pointLight.position.y = Math.cos(time * 0.3)*30
