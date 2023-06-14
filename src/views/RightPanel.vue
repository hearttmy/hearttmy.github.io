<script setup>
import {ElButton} from 'element-plus'

const test = () => {
  console.log('AP')
  console.log(AP)
  AP.getContext(function(contextData) {
    console.log("Object: context", contextData);
  });

  AP.editor.getString(function(stringData) {
      console.log("Object: source string", stringData);
  });

  AP.editor.getTranslations(function(translationsData) {
      console.log("Array: translation objects", translationsData);
  });
}
</script>

<template>
  <main>
    123123123
    <ElButton @click="test">test</ElButton>
  </main>
</template>
