import Vue from 'vue';
import {  BlockEditorPlugin  } from "@syncfusion/ej2-vue-blockeditor";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
    <div id='container'>
      <ejs-blockeditor></ejs-blockeditor>
    </div>
`
});