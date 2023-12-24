<template>
  <div class="sidebar" :class="{ disable: !editor.enabled }">
    <Blueprint :component="ElementBlock" icon="crop_square">
      <Canvas component='Container' />
    </Blueprint>

    <Blueprint :component="ElementBlock" icon="title">
      <Heading />
    </Blueprint>

    <Blueprint :component="ElementBlock" icon="notes">
      <Paragraph />
    </Blueprint>

    <Blueprint :component="ElementBlock" icon="crop_original">
      <Picture />
    </Blueprint>

    <Blueprint :component="ElementBlock" icon="view_carousel">
      <Carousel />
    </Blueprint>

    <Blueprint :component="ElementBlock" icon="view_column">
      <Canvas component='Container' v-bind="rowProps">
        <Canvas component='Container' />
        <Canvas component='Container' />
        <Canvas component='Container' />
      </Canvas>
    </Blueprint>
  </div>
</template>

<script setup>
import { Blueprint, Canvas } from '@linusborg/lib';
import ElementBlock from './ElementBlock.vue';
import Paragraph from './elements/Paragraph.vue';
import Heading from './elements/Heading.vue';
import Picture from './elements/Picture.vue';
import Carousel from './elements/Carousel.vue';
import Container from './elements/Container.vue';
import { inject } from 'vue';

const editor = inject('editor')

const rowProps = {
  elementStyle: {
    ...Container.craft.defaultProps.elementStyle,
    'flex-direction': 'row',
  },
}
</script>

<style scoped>
.sidebar {
  position: absolute;
  top: 50px;
  left: 0;
  bottom: 0;
  width: 100px;
  padding: 10px 0;
  overflow: auto;
  background-color: black;

  transition: 0.2s transform;
  transition-timing-function: ease-in-out;

  &.disable {
    transform: translateX(-100%);
  }

}
</style>
