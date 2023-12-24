<template>
	<div id="app">
		<Editor component='div' :resolverMap="resolverMap" :import="demoData">
			<Navbar />
			<ElementSidebar />
			<Preview />
			<SettingSidebar />
		</Editor>
	</div>
</template>

<script setup>
import { markRaw } from 'vue';
import { Editor, Canvas } from '@linusborg/lib';
import SettingSidebar from './components/SettingSidebar.vue';
import ElementSidebar from './components/ElementSidebar.vue';
import Navbar from './components/Navbar.vue';
import Preview from './components/Preview.vue';
import Container from './components/elements/Container.vue';
import Paragraph from './components/elements/Paragraph.vue';
import Heading from './components/elements/Heading.vue';
import Picture from './components/elements/Picture.vue';
import Carousel from './components/elements/Carousel.vue';

import demoData from './demo_data.json?raw'

const resolverMap = {
	Canvas: markRaw(Canvas),
	Container: markRaw(Container),
	Paragraph: markRaw(Paragraph),
	Heading: markRaw(Heading),
	Picture: markRaw(Picture),
	Carousel: markRaw(Carousel),
}
</script>
