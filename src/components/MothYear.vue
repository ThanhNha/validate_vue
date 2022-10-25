<template>
  <Datepicker
    v-model="getValue"
    @blur="$emit('ex-value', getValue)"
    :state="this.error"
    :minDate="minDate"
    :flow="flow"
    placeholder="Select Month"
    monthPicker
  ></Datepicker>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";
export default {
  components: { Datepicker },

  props: {
    state: {
      required: true,
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {
      error: null,
      getValue: ref(),
      minDate: ref(
        new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        )
      ),
      flow: ref(["month", "year"]),
    };
  },
  updated() {
    this.error = !this.state;
  },
  mounted() {
    this.$emit("ex-value", this.getValue);
  },
};
</script>
<style lang="scss">
.dp__input {
  padding: 10px 12px;
  &.dp__input_icon_pad {
    padding-left: 35px;
  }
  &.dp__input_invalid {
    border-color: #dc3545;
    box-shadow: none;
  }
  &.dp__input_valid {
    border-color: #198754;
    box-shadow: none;
  }
}
</style>