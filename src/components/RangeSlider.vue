<template>
  <div class="range-input">
    <Slider v-model="value" :min="0" :max="1000" :format="format" />
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      value: 500,
      format: {
        prefix: "$ ",
        decimals: 0,
      },
    };
  },
};
</script>

<style src="@vueform/slider/themes/default.css">
</style>
<style  lang="scss">
.range-input {
  .slider-tooltip {
    background: #319e5e;
    border: #319e5e;
    padding: 2px 25px;
    bottom: 50% !important;
    left: 50%;
    transform: translate(-50%, 50%) !important;
  }
  .slider-horizontal .slider-tooltip-top:before {
    position: absolute;
    content: "<";
    top: 10%;
    left: 5px;
    color: #fff;
    // transform: translateY(-50%);
    border: none;
  }
  .slider-horizontal .slider-tooltip-top:after {
    position: absolute;
    content: ">";
    top: 10%;
    right: 5px;
    color: #fff;
    // transform: translateY(-50%);
    border: none;
  }
  .slider-connect {
    background: #319e5e;
  }
  .slider-horizontal .slider-tooltip-top:before {
  }
}
</style>
