document.addEventListener("DOMContentLoaded", function() {

  var camera;
  var scene;
  var renderer;
  var mesh;
  init();
  animate();

  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);
    var light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 1, 1 ).normalize();
    scene.add(light);
    var geometry = new THREE.CubeGeometry( 10, 20, 10);
    var material1 = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('js/images/tardis.jpg') } );
    var material2 = new THREE.MeshBasicMaterial( { color: 0x132759 } );
    var materials = [material1, material1, material2, material2, material1, material1];

    var meshFaceMaterial = new THREE.MeshFaceMaterial( materials );
    mesh = new THREE.Mesh(geometry,  meshFaceMaterial);
    mesh.position.z = -50;
    scene.add( mesh );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    window.addEventListener( 'resize', onWindowResize, false );
    render();
  }

  function animate() {
      mesh.rotation.x += .01;
      mesh.rotation.y += .01;
      render();
      requestAnimationFrame( animate );
  }

  function render() {
    renderer.render( scene, camera );
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    render();
  }

});
