<script setup lang="ts">
import { reactive } from 'vue'

// const versions = reactive({ ...window.electron.process.versions })
</script>

<template>
  <div class="status-bar">
    <div class="status-bar-item">
      <!--      <span class="status-bar-item-segment"> Electron v{{ versions.electron }} </span>-->
      <!--      <span class="status-bar-item-segment"> Chromium v{{ versions.chrome }} </span>-->
      <!--      <span class="status-bar-item-segment"> Node v{{ versions.node }} </span>-->
      <!--      <span class="status-bar-item-segment"> V8 v{{ versions.v8 }} </span>-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.status-bar {
  position: fixed;
  width: auto;
  bottom: 0;
  right: 0;
  border-style: solid;
  border-radius: 8px 0 0;
  border-width: 1px;
  border-color: #ededec;
  display: flex;
  justify-content: flex-end;
  height: 18px;
  min-height: 18px;
  padding: 4px 4px 4px;
  gap: 2px;
  user-select: none;
  z-index: 15;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  color: #aaa9a5;
  .status-bar-item {
    border-radius: var(--radius-s);
    display: inline-flex;
    align-items: center;
    padding: 3px var(--size-2-2);
    line-height: 1;
    cursor: pointer;
    .status-bar-item-segment {
      margin-right: 8px;
    }
    .status-bar-item-segment:last-child {
      margin-right: 0;
    }
    .status-bar-item-segment:hover {
      color: #72706c;
      transition: color 0.2s linear;
      text-align: center;
      background-color: #e8e7e4 !important;
    }
  }
}
</style>
