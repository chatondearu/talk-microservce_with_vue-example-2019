<template id="template-chat">
  <div id="fragment-vue-chat">
    <svg width="100%" height="100%" viewBox="0 0 266 272" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><use xlink:href="#_Image1" x="0" y="0" width="266px" height="272px"/>
      <g>
        <path id="chat-team" d="M259,21.2c0,-6.186 -5.014,-11.2 -11.2,-11.2c-41.604,0 -186.996,0 -228.6,0c-6.186,0 -11.2,5.014 -11.2,11.2c0,41.966 0,189.634 0,231.6c0,6.186 5.014,11.2 11.2,11.2c41.604,0 186.996,0 228.6,0c6.186,0 11.2,-5.014 11.2,-11.2c0,-41.966 0,-189.634 0,-231.6Z" style="fill:#03bd5b;"/>
        <clipPath id="_clip3">
          <path d="M259,21.2c0,-6.186 -5.014,-11.2 -11.2,-11.2c-41.604,0 -186.996,0 -228.6,0c-6.186,0 -11.2,5.014 -11.2,11.2c0,41.966 0,189.634 0,231.6c0,6.186 5.014,11.2 11.2,11.2c41.604,0 186.996,0 228.6,0c6.186,0 11.2,-5.014 11.2,-11.2c0,-41.966 0,-189.634 0,-231.6Z"/>
        </clipPath>
        <g clip-path="url(#_clip3)"><rect x="59" y="60" width="180" height="12" style="fill:#ebeff3;"/><rect x="59" y="112.5" width="180" height="12" style="fill:#ebeff3;"/>
          <rect x="59" y="162" width="180" height="12" style="fill:#ebeff3;"/>
          <rect x="59" y="35" width="161" height="12" style="fill:#ebeff3;"/>
          <rect x="59" y="87.5" width="161" height="12" style="fill:#ebeff3;"/>
          <rect x="59" y="137" width="161" height="12" style="fill:#ebeff3;"/>
          <rect x="23" y="210" width="216" height="41" style="fill:#ebeff3;"/>
          <circle cx="33" cy="45" r="10" style="fill:#ebeff3;"/>
          <circle cx="33" cy="96" r="10" style="fill:#ebeff3;"/>
          <circle cx="33" cy="147" r="10" style="fill:#ebeff3;"/>
        </g>
      </g>
    </svg>

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'chat'
}
</script>

<style>
  #fragment-vue-chat {
    width: 35vh;
  }
</style>
