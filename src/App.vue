<template>
  <div class="bg-form">
    <div class="d-flex flex-wrap align-items-center">
      <div class="wrapper-image">
        <img alt="Form Background" src="./assets/bg.jpeg" class="bg-img" />
      </div>
      <div class="wrapper-form">
        <FormValidate v-if="!done" @done="options" />
        <CompletePage v-if="done" />
      </div>
    </div>
  </div>
</template>

<script>
import FormValidate from "./components/FormValidate.vue";
import CompletePage from "./components/CompletePage.vue";
export default {
  name: "App",
  components: { FormValidate, CompletePage },
  data() {
    return {
      done: false,
    };
  },
  methods: {
    options(data) {
      this.done = data;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(71, 71, 71);
  @media only screen and (min-width: 1200px) {
    padding: 80px;
  }
  .bg-form {
    background: #fff;
    position: relative;
  }
}
.wrapper-image {
  height: 250px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    height: 100%;
    width: 35%;
  }
  @media only screen and (min-width: 1200px) {
    height: 100%;
    width: 25%;
  }

  .bg-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.wrapper-form {
  overflow: hidden;
  background: #fff;
  padding: 10px 20px;
  width: 100%;
  @media only screen and (min-width: 1200px) {
    padding: 30px 50px;
    width: 75%;
  }
  @media only screen and (min-width: 768px) {
    padding: 20px 35px;
    width: 65%;
  }
}
</style>
