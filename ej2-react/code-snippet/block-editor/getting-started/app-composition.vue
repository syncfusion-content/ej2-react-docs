<template>
  <div id='container'>
     <ejs-blockeditor></ejs-blockeditor>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { BlockEditorComponent } from '@syncfusion/ej2-vue-blockeditor';

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';

  #container {
    margin: 50px auto;
  }
</style>