<template id="template-vue-player">
  <div id="vue-player">
    <!-- SVG content -->
    <svg width="100%" height="100%" viewBox="0 0 385 272" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
      <g clip-path="url(#_clip2)">
        <path id="player-team" d="M376,21.2c0,-6.186 -5.014,-11.2 -11.2,-11.2c-54.555,0 -292.045,0 -346.6,0c-6.186,0 -11.2,5.014 -11.2,11.2c0,41.966 0,189.634 0,231.6c0,6.186 5.014,11.2 11.2,11.2c54.555,0 292.045,0 346.6,0c6.186,0 11.2,-5.014 11.2,-11.2c0,-41.966 0,-189.634 0,-231.6Z" style="fill:#ff9947;" />
        <clipPath id="_clip3">
          <path d="M376,21.2c0,-6.186 -5.014,-11.2 -11.2,-11.2c-54.555,0 -292.045,0 -346.6,0c-6.186,0 -11.2,5.014 -11.2,11.2c0,41.966 0,189.634 0,231.6c0,6.186 5.014,11.2 11.2,11.2c54.555,0 292.045,0 346.6,0c6.186,0 11.2,-5.014 11.2,-11.2c0,-41.966 0,-189.634 0,-231.6Z" />
        </clipPath>
        <g clip-path="url(#_clip3)">
          <path d="M231.5,137l-80,40l0,-80l80,40Z" style="fill:#ebeff3;" />
        </g>
      </g>
    </svg>

    <!-- Reactive part -->
    <p class="reactive-part">
      Views:
      <span id="views-counter">
        {{ views }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'player',
  props: {
    views: Number
  }
}
</script>

<style>
#vue-player {
  position: relative;
  width: 50vh;
}
#vue-player .reactive-part{
  position: absolute;
  top: 25vh;
  left: 3vh;

  font-weight: bold;
  font-size: 3vh;
}
</style>
