<template>
  <div class="complete">
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Completed</h4>
      <p>
        You can check your output in
        <span class="alert-link">Application > localStorage .</span>
        
      </p>
      <hr />
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "CompletePage",
  props: {
    value: Object,
  },
};
</script>
  
  <style lang="scss" scoped>
</style>
  