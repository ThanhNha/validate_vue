<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('select-value', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("select-value", this.selected);
  },
};
</script>
  
  <style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 45px;
  line-height: 45px;
}

.custom-select .selected {
  background-color: #fff;
  border-radius: 6px;
  border: 1px solid #ced4da;
  color: #000;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #ced4da;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 50%;
  right: 1em;
  width: 0;
  height: 0;
  /* transform: translateY(-50%); */
  border: 5px solid transparent;
  border-color: #ced4da transparent transparent transparent;
}

.custom-select .items {
  color: #000;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #ced4da;
  border-left: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #000;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #ced4da;
}

.selectHide {
  display: none;
}
</style>
  