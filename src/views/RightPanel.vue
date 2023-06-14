<script setup>
import {ElButton, ElCard} from 'element-plus'
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
  <div>
    <div class="result_wrapper">
      <img src="@/assets/logo.png" class="logo"/>
      <ElCard class="result">123131231231312313</ElCard>
    </div>
    <div class="btn_wrapper">
      <ElButton @click="test" type="success" round>DeepL(带术语表)</ElButton>
      <ElButton @click="test" type="success" round>Google Translation(带术语表)</ElButton>
    </div>

  </div>
</template>

<style scoped>
.logo {
  width: 40px;
  margin-right: 10px;
}
.result_wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 10px;
}
.result {
  width: 400px;
  min-height: 100px;
  background-color: ;
}
.btn_wrapper{
  margin-left: 50px;
}

</style>