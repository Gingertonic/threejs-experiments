// action to happen in scene refresh
const update = () => {
  // cube rotation
  cube.rotation.x += 0.001;
  cube.rotation.y -= 0.001;
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
