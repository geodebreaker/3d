const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#three') });
renderer.setSize(window.innerWidth, window.innerHeight);

mkobj = (a, b, c, d) => {
    var geo = new THREE[a + 'Geometry'](...b);
    var mat = new THREE[(d ?? 'MeshStandard') + 'Material'](c);
    var obj = new THREE.Mesh(geo, mat);
    scene.add(obj);
    return obj;
}

var alight = new THREE.AmbientLight(0x888888);
var dlight = new THREE.DirectionalLight(0xffffff, 2);
var dlhelp = new THREE.DirectionalLightHelper(dlight, 5);
var ahelp = new THREE.AxesHelper(3);
var ghelp = new THREE.GridHelper(500, 100);
scene.add(alight, dlight, dlhelp, ahelp, ghelp);
dlight.rotation.x = 0.8;
dlight.position.y = 100;

var worldbox = mkobj('Box', [500, 500, 500], { color: 0x888888, side: THREE.DoubleSide }, 'MeshBasic');
var cube = mkobj('Box', [3, 3, 3], { color: 0x00ff00 });

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);