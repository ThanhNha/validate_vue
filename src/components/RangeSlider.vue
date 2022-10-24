<template>
  <div class="range-input">
    <Slider
      v-model="value"
      :min="0"
      :max="1000"
      :format="format"
      @update="$emit('range-value', value)"
    />
  </div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: {
    Slider,
  },
  props: {
    rangeValue:{
      type: Number,
      default: 500
    } 
  },
  data() {
    return {
      value: this.rangeValue,
      format: {
        prefix: "$ ",
        decimals: 0,
      },
    };
  },
  updated(){
    this.value = this.rangeValue;
  }
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
