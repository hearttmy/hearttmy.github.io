<script setup>
import {ElButton, ElCard, ElScrollbar} from 'element-plus'
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
const test2 = () => {
  const p = document.getElementsByClassName('el-scrollbar__view')[0]
  const p1 = document.getElementsByClassName('result_wrapper')[0]
  const p2 = document.getElementsByClassName('btn_wrapper')[0]
  console.log(p)
  p.appendChild(p1.cloneNode(true))
  p.appendChild(p2.cloneNode(true))
}
</script>

<template>
  <ElScrollbar class="wrapper">
    <div class="result_wrapper">
      <img src="@/assets/logo.png" class="logo"/>
      <ElCard class="result">
        与现实生活一致： 与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；

在界面中一致： 所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。

反馈 Feedback#
控制反馈： 通过界面样式和交互动效让用户可以清晰的感知自己的操作；

页面反馈： 操作后，通过页面元素的变化清晰地展现当前状态。

效率 Efficiency#
简化流程： 设计简洁直观的操作流程；

清晰明确： 语言表达清晰且表意明确，让用户快速理解进而作出决策；

帮助用户识别： 界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。

可控 Controllability#
用户决策： 根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；

结果可控： 用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
      </ElCard>
    </div>
    <div class="btn_wrapper">
      <ElButton @click="test" type="success" round>DeepL(带术语表)</ElButton>
      <ElButton @click="test2" type="success" round>Google Translation(带术语表)</ElButton>
    </div>

  </ElScrollbar>
</template>

<style scoped>
.wrapper {
  padding-top: 10px;
  padding-left: 10px;
  height: 100vh;
}
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
  color: white;
  background-color: #517673;
  border-radius: 8px;
}
.btn_wrapper{
  margin-left: 50px;
}

</style>