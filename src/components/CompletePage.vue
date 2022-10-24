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
       
        Please click  <a href="https://github.com/ThanhNha/validate_vue" class="alert-link">here</a> to see my source on Github
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
  