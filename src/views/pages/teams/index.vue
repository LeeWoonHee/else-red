<template>
  <main
      v-if="load"
      class="teams">
    <div class="noise-bg"></div>

    <!-- hero section  -->
    <section class="hero-contents">
      <!-- wave fog -->
      <div class="wave-container">
        <canvas class="wave" ref="wave"></canvas>
      </div>
      <div class="hero-a hero-desc">
        WHO
      </div>
      <div class="hero-b hero-desc">
        WE
      </div>
      <div class="hero-c hero-desc">
        ARE
      </div>
    </section>


    <!--  team contents section-->
    <section class="team-contents">

      <!--  team images-->
      <div class="team-images">
        <div class="absoulte w-full blex">
          <img src="@/assets/images/pages/teams/pet.png" alt="" class="team-img team-img-a">
        </div>
        <div class="absoulte w-full blex">
          <img src="@/assets/images/pages/teams/life.png" alt="" class="team-img team-img-b">
        </div>
        <div class="absoulte w-full blex">
          <img src="@/assets/images/pages/teams/smart.png" alt="" class="team-img team-img-c">
        </div>
        <div class="absoulte w-full blex">
          <img src="@/assets/images/pages/teams/ict.png" alt="" class="team-img team-img-d">
        </div>
        <div class="absoulte w-full blex">
          <img src="@/assets/images/pages/teams/env.png" alt="" class="team-img team-img-e">
          <img src="@/assets/images/pages/teams/do_6.png" alt="" class="team-img team-img-f">
        </div>
      </div>

      <!--  team description-->
      <div class="team-desc">

        <div class="desc-left">
          <div class=" sub-desc left">
            엘스의 팀원들은 '기회'를
          </div>
          <div class=" sub-desc left">
            새로운 '가치'로 만들어 내는 것을 추구합니다.
          </div>
          <div class=" sub-desc left">
            그리고 그 가치를 공유하며 함께 성장합니다.
          </div>
        </div>
        <div class="desc-right">
          <div class="sub-desc right">
            관점을 달리 하여 다름을 추구하고,
          </div>
          <div class="sub-desc right">
            다름을 추구하여 얻은 창의적인 아이디어 통하여
          </div>
          <div class="sub-desc right">
            우리를 만들어 갑니다.
          </div>
        </div>
        <div class="desc-left-b">
          <div class=" sub-desc left">
            우리는 기본에 충실하며 현실에 안주하지 않고,
          </div>
          <div class=" sub-desc left">
            끊임없이 변화하며, 변화를 이끌어 나갑니다.
          </div>
          <div class=" sub-desc left">
            무(無)에서 유(有)를 만들지 않습니다.
          </div>
          <div class=" sub-desc left">
            유(有)에서 더 나은 유(有)를 만듭니다.
          </div>
        </div>
        <div class="desc-right-b">
          <div class="sub-desc right">
            우리는 서로 물어보고, 공유하고,
          </div>
          <div class="sub-desc right">
            배우고, 생각하며 서로를 만들어 갑니다.
          </div>
          <div class="sub-desc right">
            우리는 엘스입니다.
          </div>
        </div>
      </div>

    </section>


    <!--  enjoy contents section-->
    <section class="enjoy-contents">

      <div class="enjoy-images">

        <div class="w-full flex justify-between pb-32 lg:pb-40">
          <div class="blex-top">
            <img src="@/assets/images/pages/teams/do_1.png" alt="" class="enjoy-img-a">
          </div>
          <div class="blex-bottom">
            <img src="@/assets/images/pages/teams/do_2.png" alt="" class="enjoy-img-b">
          </div>
          <div class="blex">
            <img src="@/assets/images/pages/teams/do_3.png" alt="" class="enjoy-img-c">
          </div>
        </div>

        <div class="w-4/5 lg:w-7/10 flex justify-between pb-20 lg:pb-40">
          <img src="@/assets/images/pages/teams/do_4.png" alt="" class="enjoy-img-d">
          <img src="@/assets/images/pages/teams/do_5.png" alt="" class="enjoy-img-e">
        </div>

        <div class="w-9/10 lg:w-full flex justify-between pb-20 lg:pb-40">
          <div class="w-1/3">
            <img src="@/assets/images/pages/teams/do_6.png" alt="" class="enjoy-img-f">
          </div>
          <div class="w-1/3 blex">
            <img src="@/assets/images/pages/teams/do_7.png" alt="" class="enjoy-img-g">
          </div>
          <div class="w-1/3 blex-bottom">
            <img src="@/assets/images/pages/teams/do_8.png" alt="" class="enjoy-img-h">
          </div>
        </div>

        <div class="w-full lg:w-4/5 blex-between pb-10 lg:pb-40">
          <img src="@/assets/images/pages/teams/do_9.png" alt="" class="enjoy-img-i">
          <img src="@/assets/images/pages/teams/do_10.png" alt="" class="enjoy-img-j">
          <img src="@/assets/images/pages/teams/do_11.png" alt="" class="enjoy-img-k">
        </div>
      </div>
    </section>


    <!--  we enjoy something section-->
    <section class="we-contents">
      <div class="we-desc">
        <div class="w-full blex text-white text-4xl lg:text-9xl font-bold">
          WE
        </div>
        <div class="w-full blex text-white text-4xl lg:text-8xl font-bold">
          ENJOY SOMETHING
        </div>
        <div class="w-full blex text-white text-4xl lg:text-8xl font-bold">
          ELSE
        </div>
      </div>
    </section>


    <!--  we are hustlers section-->
    <section class="hustlers">
      <div class="hustlers-title"
           ref="hustlersTitle"
      >
        WE ARE HUSTLERS
      </div>
      <div class="hustlers-sub-title">
        즐길 때는 누구보다 즐겁게,<br>
        일할 때는 누구보다 열심히 일합니다
      </div>

      <div class="hustlers-images">
        <img src="@/assets/images/pages/teams/who-a.png" alt="" class="hustlers-image hustlers-a">
        <img src="@/assets/images/pages/teams/who-b.png" alt="" class="hustlers-image hustlers-b">
        <img src="@/assets/images/pages/teams/who-c.png" alt="" class="hustlers-image hustlers-c">
        <img src="@/assets/images/pages/teams/who-d.png" alt="" class="hustlers-image hustlers-d">
        <img src="@/assets/images/pages/teams/who-e.png" alt="" class="hustlers-image hustlers-e">
        <img src="@/assets/images/pages/teams/who-f.png" alt="" class="hustlers-image hustlers-f">
        <img src="@/assets/images/pages/teams/who-g.png" alt="" class="hustlers-image hustlers-g">
        <img src="@/assets/images/pages/teams/who-h.png" alt="" class="hustlers-image hustlers-h">
        <img src="@/assets/images/pages/teams/who-i.png" alt="" class="hustlers-image hustlers-i">
        <img src="@/assets/images/pages/teams/who-j.png" alt="" class="hustlers-image hustlers-j">
        <img src="@/assets/images/pages/teams/who-k.png" alt="" class="hustlers-image hustlers-k">
        <img src="@/assets/images/pages/teams/who-l.png" alt="" class="hustlers-image hustlers-l">
        <img src="@/assets/images/pages/teams/who-m.png" alt="" class="hustlers-image hustlers-m">
        <img src="@/assets/images/pages/teams/who-n.png" alt="" class="hustlers-image hustlers-n">
        <img src="@/assets/images/pages/teams/who-o.png" alt="" class="hustlers-image hustlers-o">
        <img src="@/assets/images/pages/teams/who-p.png" alt="" class="hustlers-image hustlers-p">
      </div>

    </section>

    <!--  who else section-->
    <section class="last">
      <div class="last-desc">
        엘스의 팀원들과 함께
      </div>
      <div class="who-else">
        <div class="w-full blex">
          WHO ELSE?
        </div>
        <router-link
            class="contact-us"
            tag="a"
            :to="'/contacts'"
            @click.native="$router.push('/contacts').then(()=>{$router.go()})">
          CONTACT US
        </router-link>
      </div>
    </section>

  </main>
</template>

<script>
import * as THREE from 'three'

let bigWavesFolder,
    smallWavesFolder,
    colorFolder,
    debugObject = {},
    scene,
    waterGeometry,
    waterMaterial,
    water,
    sizes,
    camera,
    controls,
    renderer,
    canvas,
    clock

const fragmentShader = `
 #include <fog_pars_fragment>
precision mediump float;
uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;

uniform float uColorOffset;
uniform float uColorMultiplier;

varying float vElevation;

void main() {
  float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
  vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);
  gl_FragColor = vec4(color, 1.0);
   #include <fog_fragment>
}
`

const vertexShader = `
     #include <fog_pars_vertex>

uniform float uTime;

uniform float uBigWavesElevation;
uniform vec2 uBigWavesFrequency;
uniform float uBigWaveSpeed;

uniform  float uSmallWavesElevation;
uniform  float uSmallWavesFrequency;
uniform  float uSmallWavesSpeed;
uniform float uSmallWavesIterations;

varying float vElevation;

//  Classic Perlin 3D Noise
//  by Stefan Gustavson
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

void main() {
  #include <begin_vertex>
  #include <project_vertex>
  #include <fog_vertex>
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  float elevation =
    sin(modelPosition.x * uBigWavesFrequency.x + uTime * uBigWaveSpeed)
    * sin(modelPosition.z * uBigWavesFrequency.y + uTime * uBigWaveSpeed)
    * uBigWavesElevation;

  for(float i = 1.0; i <= 10.0; i++) {

    elevation -= abs(
      cnoise(
        vec3(modelPosition.xz * uSmallWavesFrequency * i, uTime * uSmallWavesSpeed)
        )
        * uSmallWavesElevation / i
      );
     if(i >= uSmallWavesIterations ) {
      break;
    }
  }

  modelPosition.y += elevation;
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;

  vElevation = elevation;
}
`

export default {
  name: 'index',
  data: () => ({
    load: false,
    timeline: null,
    media: null
  }),
  methods: {
    //gsap
    initGsap () {
      return this.$gsap.timeline({
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: 'main.teams',
          scroller: '#wrapper',
          start: 'top',
          end: '2400%',
          scrub: true,
          pin: true,
          preventOverlaps: true,
          fastScrollEnd: true,
          toggleActions: 'restart none reverse none'
        }
      })
          .fromTo('.hero-a', {
                scale: 1
              },
              {
                duration: 3,
                scale: 5,
                opacity: 0
              })
          .fromTo('.hero-b', {
                scale: 0,
                opacity: 0
              },
              {
                duration: 3,
                scale: 5,
                opacity: 1
              })
          .to('.hero-b', {
            opacity: 0
          })
          .fromTo('.hero-c', {
                scale: 0,
                opacity: 0
              },
              {
                duration: 3,
                scale: 5,
                opacity: 1
              })
          .to('.hero-c', {
            opacity: 0
          })
          .to('.hero-contents',
              {
                duration: 2,
                opacity: 0
              })
          .fromTo('.team-contents',
              {
                yPercent: 100
              },
              {
                duration: 2.5,
                yPercent: 0
              }
          )
          .fromTo('.team-img-a', {
                opacity: 1
              },
              {
                duration: 2,
                scale: 1.3,
                opacity: 0
              })
          .fromTo('.team-img-b', {
                opacity: 1
              },
              {
                duration: 2,
                scale: 1.3,
                opacity: 0
              })
          .fromTo('.team-img-c', {
                opacity: 1
              },
              {
                duration: 2,
                scale: 1.3,
                opacity: 0
              })
          .fromTo('.team-img-d', {
                opacity: 1
              },
              {
                duration: 2,
                scale: 1.3,
                opacity: 0
              })
          .fromTo('.team-img-e', {
                opacity: 1
              },
              {
                duration: 5,
                width: '100%',
                height: '100%'
              })
          .fromTo('.desc-left', {
                yPercent: 800
              },
              {
                duration: 10,
                yPercent: -300
              })
          .fromTo('.desc-right', {
                yPercent: 800
              },
              {
                duration: 10,
                yPercent: -300
              })
          .fromTo('.desc-left-b', {
                yPercent: 500
              },
              {
                duration: 10,
                yPercent: -400
              })
          .fromTo('.desc-right-b', {
                yPercent: 500
              },
              {
                duration: 10,
                yPercent: -500
              })
          .fromTo('.team-img-f', {
                opacity: 0,
                width: '450px',
                height: '450px'
              },
              {
                opacity: 1
              })
          .to('.team-img-e', {
            duration: 2,
            width: '450px',
            height: '450px'
          })
          .to('.team-img-e', {
            opacity: 0
          })
          .to('.team-contents',
              {
                duration: 4,
                yPercent: -100
              }, 'a')
          .fromTo('.enjoy-contents', {
                yPercent: 100
              },
              {
                duration: 10,
                yPercent: -200
              }, 'a')
          .fromTo('.we-contents', {
                yPercent: 100
              },
              {
                duration: 4,
                yPercent: 0
              }, 'a')
          .to('.enjoy-contents',
              {
                duration: 4,
                yPercent: -350
              }, 'b')
          .fromTo('.hustlers', {
                yPercent: 100
              },
              {
                yPercent: 0
              }, 'b-=1')
          .to('.we-contents', {
            duration: 3,
            yPercent: -100
          }, 'b')
          .fromTo('.hustlers-images', {
                opacity: 0,
                scale: 10,
                filter: 'blur(4px)'
              },
              {
                duration: 4,
                opacity: 1
              }, 'b+=1')
          .fromTo('.hustlers-title',
              {
                xPercent: 100
              },
              {
                duration: 10,
                xPercent: -100
              }, '-=4')
          .fromTo('.hustlers-sub-title',
              {
                opacity: 0
              }, {
                duration: 4,
                opacity: 1
              })
          .to('.hustlers-sub-title',
              {
                duration: 2,
                opacity: 0
              })
          .to('.hustlers-images', {
            filter: 'blur(0)',
            duration: 10,
            scale: .6
          })
          .to('.hustlers', {
            duration: 4,
            yPercent: -120
          }, 'd')
          .fromTo('.last', {
                yPercent: 100
              },
              {
                duration: 4,
                yPercent: 0
              }, 'd+=1')
          .fromTo('.last-desc', {
                opacity: 1
              },
              {
                opacity: 0
              })
          .fromTo('.who-else', {
                opacity: 0
              },
              {
                opacity: 1
              })
          .fromTo('.last', {
                backgroundColor: '#000000'
              },
              {
                duration: 2,
                backgroundColor: '#B20000'
              })
          .fromTo('.contact-us', {
                opacity: 0,
                bottom: '-10%'
              },
              {
                bottom: '10%',
                opacity: 1
              })

    },
    initMGsap () {
      return this.$gsap.timeline({
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: 'main.teams',
          scroller: '#wrapper',
          start: 'top',
          end: '2400%',
          scrub: true,
          pin: true,
          preventOverlaps: true,
          fastScrollEnd: true,
          toggleActions: 'restart none reverse none'
        }
      })
          .fromTo('.hero-a', {
                scale: 1
              },
              {
                duration: 2,
                scale: 2,
                opacity: 0
              })
          .fromTo('.hero-b', {
                scale: 0,
                opacity: 0
              },
              {
                duration: 2,
                scale: 2,
                opacity: 1
              })
          .to('.hero-b', {
            opacity: 0
          })
          .fromTo('.hero-c', {
                scale: 0,
                opacity: 0
              },
              {
                duration: 2,
                scale: 2,
                opacity: 1
              })
          .to('.hero-c', {
            opacity: 0
          })
          .to('.hero-contents',
              {
                duration: 2,
                opacity: 0
              })
          .fromTo('.team-contents',
              {
                yPercent: 100
              },
              {
                duration: 2.5,
                yPercent: 0
              }
          )
          .fromTo('.team-img-a', {
                opacity: 1
              },
              {
                duration: 2,
                scale: 1.3,
                opacity: 0
              })
          .fromTo('.team-img-b', {
                opacity: 1
              },
              {
                duration: 2,
                scale: 1.3,
                opacity: 0
              })
          .fromTo('.team-img-c', {
                opacity: 1
              },
              {
                duration: 2,
                scale: 1.3,
                opacity: 0
              })
          .fromTo('.team-img-d', {
                opacity: 1
              },
              {
                duration: 2,
                scale: 1.3,
                opacity: 0
              })
          .fromTo('.team-img-e', {
                opacity: 1
              },
              {
                duration: 5,
                width: '100%',
                height: '100%'
              })
          .fromTo('.desc-left', {
                yPercent: 1200
              },
              {
                duration: 8,
                yPercent: -1000
              })
          .fromTo('.desc-right', {
                yPercent: 1400
              },
              {
                duration: 8,
                yPercent: -1000
              })
          .fromTo('.desc-left-b', {
                yPercent: 1600
              },
              {
                duration: 8,
                yPercent: -1000
              })
          .fromTo('.desc-right-b', {
                yPercent: 1800
              },
              {
                duration: 8,
                yPercent: -1000
              })
          .fromTo('.team-img-f', {
                opacity: 0,
                width: '180px',
                height: '180px'
              },
              {
                opacity: 1
              })
          .to('.team-img-e', {
            duration: 2,
            width: '180px',
            height: '180px'
          })
          .to('.team-img-e', {
            opacity: 0
          })
          .to('.team-contents',
              {
                duration: 6,
                yPercent: -100
              }, 'a')
          .fromTo('.enjoy-contents', {
                yPercent: 100
              },
              {
                duration: 10,
                yPercent: -200
              }, 'a')
          .fromTo('.we-contents', {
                yPercent: 100
              },
              {
                duration: 4,
                yPercent: 0
              }, 'a')
          .to('.enjoy-contents',
              {
                duration: 4,
                yPercent: -300
              }, 'b')
          .fromTo('.hustlers', {
                yPercent: 100
              },
              {
                yPercent: 0
              }, 'b-=5')
          .to('.we-contents', {
            duration: 4,
            yPercent: -100
          }, 'b-=5')
          .fromTo('.hustlers-images', {
                opacity: 0,
                scale: 10,
                filter: 'blur(4px)'
              },
              {
                duration: 1,
                opacity: 1
              }, 'b-=4')
          .fromTo('.hustlers-title',
              {
                xPercent: 100
              },
              {
                duration: 10,
                xPercent: -100
              }, '-=5')
          .fromTo('.hustlers-sub-title',
              {
                opacity: 0
              }, {
                duration: 4,
                opacity: 1
              })
          .to('.hustlers-sub-title',
              {
                duration: 2,
                opacity: 0
              })
          .to('.hustlers-images', {
            filter: 'blur(0)',
            duration: 10,
            scale: .7
          })
          .to('.hustlers', {
            duration: 4,
            yPercent: -120
          }, 'd')
          .fromTo('.last', {
                yPercent: 100
              },
              {
                duration: 4,
                yPercent: 0
              }, 'd+=1')
          .fromTo('.last-desc', {
                opacity: 1
              },
              {
                opacity: 0
              })
          .fromTo('.who-else', {
                opacity: 0
              },
              {
                opacity: 1
              })
          .fromTo('.last', {
                backgroundColor: '#000000'
              },
              {
                duration: 2,
                backgroundColor: '#B20000'
              })
          .fromTo('.contact-us', {
                opacity: 0,
                bottom: '-10%'
              },
              {
                bottom: '20%',
                opacity: 1
              })
    },
    setGsap () {
      this.media = this.$gsap.matchMedia()
      this.media.add('(min-width: 1025px)', () => {
        if (this.timeline) {
          this.timeline.kill()
          this.timeline = null
        }
        this.timeline = this.initGsap()
        return () => {
          if (this.timeline) {
            this.timeline.kill()
            this.timeline = null
          }
        }
      }).add('(max-width: 1024px)', () => {
        if (this.timeline) {
          this.timeline.kill()
          this.timeline = null
        }
        this.timeline = this.initMGsap()
        return () => {
          if (this.timeline) {
            this.timeline.kill()
            this.timeline = null
          }
        }
      })
      this.$scrollTrigger.refresh()
    },
    //three.js
    initGl () {
      /**
       * Debug
       */
      debugObject = {
        waveDepthColor: '#210000',
        waveSurfaceColor: '#3f0000',
        fogNear: 1,
        fogFar: 4,
        fogColor: '#3f0000'
      }

      /**
       * Base
       */
      // Canvas
      // canvas = document.querySelector('.wave')
      canvas = this.$refs.wave

      // Scene
      scene = new THREE.Scene()
      scene.fog = new THREE.Fog(
          debugObject.fogColor,
          debugObject.fogNear,
          debugObject.fogFar
      )
      scene.background = new THREE.Color(debugObject.fogColor)

      /**
       * Object
       */
      waterGeometry = new THREE.PlaneGeometry(12, 12, 512, 512)

      // Material
      waterMaterial = new THREE.ShaderMaterial({
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        // transparent: true,
        fog: true,
        uniforms: {
          uTime: {value: 0},
          uMouse: {value: new THREE.Vector2()},
          //Big Waves
          // uBigWavesElevation: { value: .35 },
          uBigWavesElevation: {value: .45},
          // uBigWavesFrequency: { value: new THREE.Vector2(.577, .811) },
          uBigWavesFrequency: {value: new THREE.Vector2(1.577, .811)},
          // uBigWaveSpeed     : { value: .827 },
          uBigWaveSpeed: {value: .827},
          // Small Waves
          uSmallWavesElevation: {value: .062},
          uSmallWavesFrequency: {value: 1.03},
          uSmallWavesSpeed: {value: 0},
          uSmallWavesIterations: {value: 2},
          // Color
          uDepthColor: {value: new THREE.Color(debugObject.waveDepthColor)},
          uSurfaceColor: {value: new THREE.Color(debugObject.waveSurfaceColor)},
          uColorOffset: {value: 0.08},
          uColorMultiplier: {value: 5},

          // Fog, contains fogColor, fogDensity, fogFar and fogNear
          ...THREE.UniformsLib['fog']
        }
      })

      water = new THREE.Mesh(waterGeometry, waterMaterial)
      water.rotation.x = -Math.PI * 0.5
      scene.add(water)

      /**
       * Sizes
       */
      sizes = {
        width: window.innerWidth,
        height: window.innerHeight
      }

      window.addEventListener('resize', this.resize)

      /**
       * Renderer
       */

      renderer = new THREE.WebGLRenderer({
        canvas: canvas
      })
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      /**
       * Camera
       */

      // Base camera
      camera = new THREE.PerspectiveCamera(
          47,
          sizes.width / sizes.height,
          0.1,
          100
      )
      camera.position.set(1, 1, 1)
      camera.lookAt(water.position)
      scene.add(camera)
      clock = new THREE.Clock()
      /**
       * Animate
       */
      clock = new THREE.Clock()
      this.tick()


    },
    tick () {

      // Update time
      if (waterMaterial) waterMaterial.uniforms.uTime.value = clock.getElapsedTime()

      // Render
      if (renderer) renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(this.tick)
    },
    resize () {
      // Update sizes
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
  },
  mounted () {
    this.load = true
    this.$nextTick(() => {
      this.$emit('router-mounted')
      this.initGl()
      this.setGsap()

    })

  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.tick)
    // scen remove
    scene.remove(water)

    // geometry clean up
    waterGeometry.dispose()
    waterMaterial.dispose()

    // free memory
    bigWavesFolder = null
    smallWavesFolder = null
    colorFolder = null
    debugObject = null
    scene = null
    waterGeometry = null
    waterMaterial = null
    water = null
    sizes = null
    camera = null
    controls = null
    renderer = null
    canvas = null
    this.media.kill()
    this.timeline.kill()
    this.timeline = null
    window.removeEventListener('resize', this.resize)
    this.load = false
  }
}
</script>

<style scoped lang="scss">
.teams::v-deep {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #000;

  .hero-contents {
    position: relative;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: linear-gradient(360deg, #000000 0%, rgba(255, 255, 255, 0) 42.96%);
    z-index: 1;

    .wave-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: calc(var(--vh, 1vh) * 100);
      z-index: -1;

      .wave {
        width: 100%;
        height: 100%;
        outline: none;
      }

    }

    .hero-desc {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      z-index: 1;
      font-weight: 700;
      font-size: 4.167vw; //80px;
      letter-spacing: -4px;
      color: #000;
      line-height: 250px;
      @media screen and (max-width: 768px) {
        font-size: 80px;
      }
    }
  }

  .team-contents {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    z-index: 1;


    .team-images {
      position: absolute;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      height: 100%;
      width: 100%;

      .team-img {
        position: absolute;
        width: 20.833vw; // 400px;
        height: 31.250vw; //600px;
        object-fit: cover;

        @media screen and (max-width: 1024px) {
          width: 240px;
          height: 360px;
        }

        &.team-img-a {
          z-index: 6;
        }

        &.team-img-b {
          z-index: 5;
        }

        &.team-img-c {
          z-index: 4;
        }

        &.team-img-d {
          z-index: 3;
        }

        &.team-img-e {
          z-index: 2;
        }

        &.team-img-f {
          z-index: 1;
        }
      }
    }
  }

  .team-desc {
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 2.240vw; // 43px;
    line-height: 55px;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    color: #fff;
    height: calc(var(--vh, 1vh) * 100);
    z-index: 6;
    @media screen and (max-width: 1024px) {
      font-size: 18px;
      width: 100%;
      line-height: 18px;
    }

    .desc-left,
    .desc-left-b {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-items: center;
      align-content: center;
      justify-content: flex-start;
      justify-items: flex-start;
    }

    .desc-right,
    .desc-right-b {
      padding-top: 50px;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-items: center;
      align-content: center;
      justify-content: flex-end;
      justify-items: flex-end;
    }

    .sub-desc {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      align-items: center;
      align-content: center;

      @media screen and (max-width: 1024px) {
        width: 100%;
        padding: 0 16px;
      }

      &.left {
        justify-content: flex-start;
        justify-items: flex-start;
        text-align: left;
      }

      &.right {
        justify-content: flex-end;
        justify-items: flex-end;
        text-align: right;
      }
    }
  }

  .enjoy-contents {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);

    .do-desc {
      color: #fff;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      height: calc(var(--vh, 1vh) * 100);
      transform: translate(-50%, -50%);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      mix-blend-mode: difference;
      font-size: 150px;
      z-index: 5;
    }

    .enjoy-images {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-items: flex-start;

      .enjoy-img-a {
        width: 15.104vw; //290px;
        height: 15.104vw; //290px;
        @media screen and (max-width: 1024px) {
          width: 72px;
          height: 72px;
        }
      }

      .enjoy-img-b {
        width: 23.438vw; //450px;
        height: 23.438vw; //450px;
        margin-bottom: 4.167vw; //-80px;
        @media screen and (max-width: 1024px) {
          width: 110px;
          height: 110px;
          margin-bottom: -40px;
        }
      }

      .enjoy-img-c {
        width: 31.250vw; //600px;
        height: 31.250vw; //600px;
        @media screen and (max-width: 1024px) {
          width: 150px;
          height: 150px;
        }
      }

      .enjoy-img-d {
        margin-top: 5.208vw; //100px;
        width: 27.292vw; //524px;
        height: 27.292vw; //524px;
        @media screen and (max-width: 1024px) {
          margin-top: 50px; //100px;
          width: 130px;
          height: 130px;
        }
      }

      .enjoy-img-e {
        width: 23.438vw; //450px;
        height: 23.438vw; //450px;
        @media screen and (max-width: 1024px) {
          width: 115px;
          height: 115px;
        }
      }

      .enjoy-img-f {
        width: 23.438vw; //450px;
        height: 23.438vw; //450px;
        @media screen and (max-width: 1024px) {
          width: 115px;
          height: 115px;
        }
      }

      .enjoy-img-g {
        margin-top: 15.625vw; //-300px;
        width: 31.250vw; //600px;
        height: 31.250vw; //600px;
        @media screen and (max-width: 1024px) {
          margin-top: 80px;
          width: 80px;
          height: 80px;
        }
      }

      .enjoy-img-h {
        width: 23.438vw; //450px;
        height: 23.438vw; //450px;
        margin-bottom: -200px;
        @media screen and (max-width: 1024px) {
          width: 115px;
          height: 115px;
          margin-bottom: -100px;
        }
      }

      .enjoy-img-i {
        width: 12.500vw; //240px;
        height: 12.500vw; //240px;
        @media screen and (max-width: 1024px) {
          width: 60px;
          height: 60px;
        }

      }

      .enjoy-img-j {
        width: 23.438vw; //450px;
        height: 23.438vw; //450px;
        @media screen and (max-width: 1024px) {
          width: 115px;
          height: 115px;
        }
      }

      .enjoy-img-k {
        margin-top: 15.625vw; //300px;
        width: 18.229vw; //350px;
        height: 18.229vw; //350px;
        @media screen and (max-width: 1024px) {
          margin-top: 200px;
          width: 100px;
          height: 100px;
        }
      }

    }
  }

  .we-contents {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    mix-blend-mode: difference;
    z-index: 10;

    .we-desc {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  .hustlers {
    position: absolute;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    perspective: 500px;
    place-items: center;

    .hustlers-title {
      position: absolute;
      width: 100%;
      height: 100%;
      color: #fff;
      font-size: 7.813vw; //150px;
      font-weight: 700;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      z-index: 5;

      @media screen and (max-width: 1024px) {
        font-size: 50px;
      }

    }

    .hustlers-sub-title {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;
      font-weight: 700;
      font-size: 2.500vw; //48px;
      text-align: center;
      line-height: 60px;
      z-index: 5;

      @media screen and (max-width: 1024px) {
        font-size: 20px;
        line-height: 30px;
      }
    }

    .hustlers-images {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      align-content: center;
      flex-wrap: wrap;

      .hustlers-image {
        width: 15.625vw; //300px;
        height: 15.625vw; //300px;
        object-fit: cover;
        @media screen and (max-width: 1024px) {
          width: 120px;
          height: 120px;
        }
      }

      .hustlers-a {
        position: absolute;
        left: -10%;
        top: 30%;
      }

      .hustlers-b {
        position: absolute;
        left: 15%;
        top: -15%;
      }

      .hustlers-c {
        position: absolute;
        left: 10%;
        top: 50%;
        @media screen and (max-width: 1024px) {
          top: 65%;
        }
      }

      .hustlers-d {
        position: absolute;
        left: 50%;
        top: 80%;
      }

      .hustlers-e {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .hustlers-f {
        position: absolute;
        right: 7%;
        top: 50%;
        @media screen and (max-width: 1024px) {
          top: 65%;
        }
      }

      .hustlers-g {
        position: absolute;
        right: 0;
        bottom: -30%;
      }

      .hustlers-h {
        position: absolute;
        right: 20%;
        top: 5%;
      }

      .hustlers-i {
        position: absolute;
        left: -5%;
        bottom: -10%;
      }

      .hustlers-j {
        position: absolute;
        right: -5%;
        top: -15%;
      }

      .hustlers-k {
        position: absolute;
        right: -20%;
        top: 40%;
      }

      .hustlers-l {
        position: absolute;
        left: -20%;
        top: -30%;
      }

      .hustlers-m {
        position: absolute;
        right: 40%;
        top: -35%;
      }

      .hustlers-n {
        position: absolute;
        left: 20%;
        bottom: -50%;
      }

      .hustlers-o {
        position: absolute;
        left: -30%;
        bottom: -40%;
      }

      .hustlers-p {
        position: absolute;
        right: -5%;
        top: -15%;
      }

    }
  }

  .last {
    position: absolute;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    z-index: 11;

    .last-desc {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      color: #fff;
      font-weight: 700;
      font-size: 3.125vw; //60px;

      @media screen and (max-width: 1024px) {
        font-size: 28px;
      }
    }

    .who-else {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      text-align: center;
      color: #000;
      font-weight: 700;
      font-size: 10.417vw; //200px;

      @media screen and (max-width: 1024px) {
        font-size: 60px;
      }

      .contact-us {
        position: absolute;
        width: 200px;
        height: 200px;
        border: 1px solid #000;
        border-radius: 50%;
        color: #000;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        text-align: center;
        font-weight: 700;
        font-size: 1.250vw; //24px;

        @media screen and (max-width: 1024px) {
          font-size: 16px;
          width: 150px;
          height: 150px;
        }
      }
    }
  }

}

</style>
