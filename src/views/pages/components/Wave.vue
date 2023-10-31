<template>
  <div class="wave-wrapper">
    <div class="wave"></div>
  </div>
</template>

<script>
import * as THREE from "three";

let container,
    camera,
    scene,
    renderer,
    uniforms,
    material,
    mesh,
    mouseX,
    mouseY,
    lat,
    lon,
    phy,
    theta,
    windowHalfX,
    windowHalfY,
    startTime,
    clock,
    geometry;

const vertexShader =
          `
          uniform float iGlobalTime;
  uniform vec2 iResolution;
  uniform vec4 iMouse;
  uniform float audio1;
  uniform sampler2D iChannel0;
  uniform sampler2D iChannel1;

  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.5 );
    gl_Position = projectionMatrix * mvPosition;
  }`;

const fragmentShader =
          `
uniform float iGlobalTime;
uniform vec2 iResolution;
uniform vec4 iMouse;
uniform float audio1;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

#define t iGlobalTime
mat2 m(float a){float c=cos(a), s=sin(a);return mat2(c,-s,s,c);}
float map(vec3 p){
    p.xz*= m(1.3);p.xy*= m(.4) ;
    vec3 q = p*3.5+t;
    return  p.x*p.y * length(p+vec3(sin(1.7)))*log(length(p)+1.) + sin(q.x+sin(q.z+sin(q.y)))*0.7 - 1.0 ;
}

void main(){
  vec2 p = gl_FragCoord.xy/iResolution.y - vec2(1.0,0.8) ;
    vec3 cl = vec3(0.8);
    float d = 5.5;
    for(int i=0; i<=5; i++) {
      vec3 p = vec3(0,.2,6.) + normalize(vec3(p, -3.0))*d ;
        float rz = map(p);
    float f =  clamp((rz - map(p+.1))*0.5*cos(iGlobalTime*.2)*p.x, -.1, .5 );
        vec3 l = vec3(.1,.2,.4) + vec3(.8, .1, .1)*f;
        cl = cl*l + (.2-smoothstep(.8, 1.5, rz))*.9*l;
    d += min(rz, 0.8 );
  }
    gl_FragColor = vec4(cl, 1.5);
}`;
export default {
  name: 'wave',
  mounted() {
    this.initGl()
  },
  methods: {
    initGl() {
      mouseX = 0
      mouseY = 0
      lat = 0
      lon = 0
      phy = 0
      theta = 0
      windowHalfX = window.innerWidth / 2
      windowHalfY = window.innerHeight / 2
      startTime = Date.now()
      clock = new THREE.Clock()
      this.init()
      this.animate()
    },
    init() {
      container = document.querySelector('.wave')
      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000000)
      camera.position.z = 1.
      scene = new THREE.Scene()

      uniforms = {
        iGlobalTime: {
          type : "f",
          value: 0.0
        },
        audio1     : {
          type : "f",
          value: 0.0
        },
        iResolution: {
          type : "v2",
          value: new THREE.Vector2()
        },
      };
      material = new THREE.ShaderMaterial({
                                            uniforms      : uniforms,
                                            vertexShader  : vertexShader,
                                            fragmentShader: fragmentShader
                                          })

      geometry = new THREE.PlaneGeometry(1, 1)
      mesh = new THREE.Mesh(geometry, material)
      mesh.scale.x = window.innerWidth
      mesh.scale.y = window.innerHeight

      scene.add(mesh)

      renderer = new THREE.WebGLRenderer()
      container.appendChild(renderer.domElement)
      uniforms.iResolution.value.x = window.innerWidth
      uniforms.iResolution.value.y = window.innerHeight
      renderer.setSize(window.innerWidth, window.innerHeight)
      window.addEventListener('resize', this.onWindowResize, false)
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.render();
    },
    render() {
      uniforms.iGlobalTime.value += clock.getDelta() * .4
      renderer.render(scene, camera)
    },
    onWindowResize() {
      windowHalfX = window.innerWidth / 2,
          windowHalfY = window.innerHeight / 2,

          camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)

      uniforms.iResolution.value.x = window.innerWidth
      uniforms.iResolution.value.y = window.innerHeight
    }
  }
}
</script>
<style scoped lang="scss">
.wave-wrapper::v-deep {
  //position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: screen;
  z-index:2;


  .wave {
    width: 100%;
    height: 100%;
  }
  canvas{
    //position:absolute;
    top:0;
    z-index: 1;
    opacity:0.7;
  }
}
</style>
