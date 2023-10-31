<template>
  <div class="fog">
    <div id="foglayer_01" class="fog">
      <div class="image01"></div>
      <div class="image02"></div>
    </div>
    <div id="foglayer_02" class="fog">
      <div class="image01"></div>
      <div class="image02"></div>
    </div>
    <div id="foglayer_03" class="fog">
      <div class="image01"></div>
      <div class="image02"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fog"
}
</script>

<style scoped lang="scss">
.fog::v-deep {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  z-index: 1;
  /* ---------- Fog ---------- */
  #foglayer_01, #foglayer_02, #foglayer_03 {
    height: 100%;
    position: absolute;
    width: 200%;
  }

  #foglayer_01 .image01, #foglayer_01 .image02,
  #foglayer_02 .image01, #foglayer_02 .image02,
  #foglayer_03 .image01, #foglayer_03 .image02 {
    float: left;
    height: 100%;
    width: 50%;
  }

  #foglayer_01 {
    -webkit-animation: foglayer_01_opacity 10s linear infinite, foglayer_moveme 15s linear infinite;
    -moz-animation: foglayer_01_opacity 10s linear infinite, foglayer_moveme 15s linear infinite;
    animation: foglayer_01_opacity 10s linear infinite, foglayer_moveme 15s linear infinite;
  }

  #foglayer_02, #foglayer_03 {
    -webkit-animation: foglayer_02_opacity 21s linear infinite, foglayer_moveme 13s linear infinite;
    -moz-animation: foglayer_02_opacity 21s linear infinite, foglayer_moveme 13s linear infinite;
    animation: foglayer_02_opacity 21s linear infinite, foglayer_moveme 13s linear infinite;
  }

  #foglayer_01 .image01, #foglayer_01 .image02 {
    background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png") center center/cover no-repeat transparent;
  }

  #foglayer_02 .image01, #foglayer_02 .image02,
  #foglayer_03 .image01, #foglayer_03 .image02 {
    background: url("https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png") center center/cover no-repeat transparent;
  }

  /* ---------- Keyframe Layer 1 ---------- */
  @-webkit-keyframes foglayer_01_opacity {
    0% {
      opacity: .1;
    }
    22% {
      opacity: .5;
    }
    40% {
      opacity: .28;
    }
    58% {
      opacity: .4;
    }
    80% {
      opacity: .16;
    }
    100% {
      opacity: .1;
    }
  }
  @-moz-keyframes foglayer_01_opacity {
    0% {
      opacity: .1;
    }
    22% {
      opacity: .5;
    }
    40% {
      opacity: .28;
    }
    58% {
      opacity: .4;
    }
    80% {
      opacity: .16;
    }
    100% {
      opacity: .1;
    }
  }
  @-o-keyframes foglayer_01_opacity {
    0% {
      opacity: .1;
    }
    22% {
      opacity: .5;
    }
    40% {
      opacity: .28;
    }
    58% {
      opacity: .4;
    }
    80% {
      opacity: .16;
    }
    100% {
      opacity: .1;
    }
  }
  @keyframes foglayer_01_opacity {
    0% {
      opacity: .1;
    }
    22% {
      opacity: .5;
    }
    40% {
      opacity: .28;
    }
    58% {
      opacity: .4;
    }
    80% {
      opacity: .16;
    }
    100% {
      opacity: .1;
    }
  }
  /* ---------- Keyframe Layer 2 ---------- */
  @-webkit-keyframes foglayer_02_opacity {
    0% {
      opacity: .5;
    }
    25% {
      opacity: .2;
    }
    50% {
      opacity: .1;
    }
    80% {
      opacity: .3;
    }
    100% {
      opacity: .5;
    }
  }
  @-moz-keyframes foglayer_02_opacity {
    0% {
      opacity: .5;
    }
    25% {
      opacity: .2;
    }
    50% {
      opacity: .1;
    }
    80% {
      opacity: .3;
    }
    100% {
      opacity: .5;
    }
  }
  @-o-keyframes foglayer_02_opacity {
    0% {
      opacity: .5;
    }
    25% {
      opacity: .2;
    }
    50% {
      opacity: .1;
    }
    80% {
      opacity: .3;
    }
    100% {
      opacity: .5;
    }
  }
  @keyframes foglayer_02_opacity {
    0% {
      opacity: .5;
    }
    25% {
      opacity: .2;
    }
    50% {
      opacity: .1;
    }
    80% {
      opacity: .3;
    }
    100% {
      opacity: .5;
    }
  }
  /* ---------- Keyframe Layer 3 ---------- */
  @-webkit-keyframes foglayer_03_opacity {
    0% {
      opacity: .8
    }
    27% {
      opacity: .2;
    }
    52% {
      opacity: .6;
    }
    68% {
      opacity: .3;
    }
    100% {
      opacity: .8;
    }
  }
  @-moz-keyframes foglayer_03_opacity {
    0% {
      opacity: .8
    }
    27% {
      opacity: .2;
    }
    52% {
      opacity: .6;
    }
    68% {
      opacity: .3;
    }
    100% {
      opacity: .8;
    }
  }
  @-o-keyframes foglayer_03_opacity {
    0% {
      opacity: .8
    }
    27% {
      opacity: .2;
    }
    52% {
      opacity: .6;
    }
    68% {
      opacity: .3;
    }
    100% {
      opacity: .8;
    }
  }
  @keyframes foglayer_03_opacity {
    0% {
      opacity: .8;
    }
    27% {
      opacity: .2;
    }
    52% {
      opacity: .6;
    }
    68% {
      opacity: .3;
    }
    100% {
      opacity: .8;
    }
  }
  /* ---------- Keyframe moveMe ---------- */
  @-webkit-keyframes foglayer_moveme {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }
  @-moz-keyframes foglayer_moveme {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }
  @-o-keyframes foglayer_moveme {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }
  @keyframes foglayer_moveme {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 767px) {
    #foglayer_01 .image01, #foglayer_01 .image02,
    #foglayer_02 .image01, #foglayer_02 .image02,
    #foglayer_03 .image01, #foglayer_03 .image02 {
      width: 100%;
    }
  }

}

</style>