<script lang="ts" setup>
const min = (): void => {
  window.electron.ipcRenderer.send('win:invoke', 'min')
}
const max = (): void => {
  window.electron.ipcRenderer.send('win:invoke', 'max')
}
const close = (): void => {
  window.electron.ipcRenderer.send('win:invoke', 'close')
}
</script>
<template>
  <div class="title-bar">
    <div class="titlebar-inner">
      <div class="titlebar-button-container mod-right">
        <div class="titlebar-button mod-minimize" @click="min">
          <svg-icon id="guide-start" icon="jianshao" />
        </div>
        <div class="titlebar-button mod-minimize" @click="max">
          <svg-icon id="guide-start" icon="zhankai" />
        </div>
        <div class="titlebar-button mod-close" @click="close">
          <svg-icon id="guide-start" icon="guanbi" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$header-height: 40px;
$header-z-index: 30;
.title-bar {
  z-index: $header-z-index;
  background-color: #27282e;
  height: calc($header-height - 1px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  -webkit-app-region: drag;

  .titlebar-inner {
    color: #ced0d6;
    font-weight: 700;
    font-size: 10px;
    line-height: 1.5;
    width: 100%;
    display: flex;

    .titlebar-button-container {
      display: flex;
      position: absolute;
      top: 0;
      height: 100%;

      .titlebar-button {
        -webkit-app-region: no-drag;
        cursor: pointer;
        align-items: center;
        padding: 0 8px;
        display: flex;
        align-items: center;
      }
      .mod-minimize:hover {
        opacity: 1;
        background-color: #383a42;
      }
      .mod-close:hover {
        opacity: 1;
        background-color: #e81123;
      }
    }
  }
}
</style>
