<script setup>
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
</script>

<template>
  <main>
    123123123
  </main>
</template>
