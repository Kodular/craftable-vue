<template>
  <div class="element-block">
    <i class="material-icons">
      {{ icon }}
    </i>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
  },
};
</script>

<style scoped>
.element-block {
  height: 50px;
  text-align: center;
  cursor: pointer;
  .material-icons {
    font-size: 40px;
    line-height: 50px;
    color: #919191;
  }
}
</style>
