<template>
  <div class="preview" :class="{ disable: !this.editor.enabled }">
    <Paper>
      <Frame component='div'>
        <Canvas component='Container' />
      </Frame>
    </Paper>
  </div>
</template>

<script>
import { Frame, Canvas } from '@linusborg/lib';
import Paper from './Paper.vue';

export default {
  components: {
    Frame, Canvas, Paper,
  },
  inject: [
    'editor',
  ],
};
</script>

<style scoped>

.preview {
  position: absolute;
  top: 50px;
  left: 100px;
  right: 100px;
  bottom: 0;
  padding: 2em 3em;
  overflow: auto;

  transition: 0.2s left, 0.2s right;
  transition-timing-function: ease-in-out;
  &.disable {
    left: 0;
    right: 0;
  }

}
</style>
