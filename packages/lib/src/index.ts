import type { App } from 'vue'
import Blueprint from './components/Blueprint.vue'
import Canvas from './components/Canvas.vue';
import Editor from './components/Editor.vue';
import Frame from './components/Frame.vue';
import settingMixin from './components/settingMixin';

function install(app: App) {
	app.component('Blueprint', Blueprint);
	app.component('Canvas', Canvas);
	app.component('Editor', Editor);
	app.component('Frame', Frame);
	app.component('settingMixin', settingMixin);
}

export { install, Blueprint, Canvas, Editor, Frame, settingMixin }
