<template>
  <nav class="navbar">
    <span class="brand">V-Craft</span>
    <div class="actions">
      <a href="https://github.com/yoychen/v-craft"><i class="el-icon-star-off" /> Github</a>
      <a href="./docs"><i class="el-icon-collection" /> Documentation</a>
      <a href="#" @click.prevent="toggleImportDialog">Import</a>
      <a href="#" @click.prevent="toggleExportDialog">Export</a>
      <el-switch :modelValue="enabled" @input="updateState" active-color="#13ce66" inactive-color="gray">
      </el-switch>
    </div>

    <el-dialog title="Export" :visible.sync="showExportDialog" :modal="false" width="30%">
      <div v-if="showExportDialog" class="disable-select">
        <textarea ref="exportTextarea" :rows="8" :value="editor.export()" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="toggleExportDialog">Close</el-button>
        <el-button size="medium" type="primary" @click="copyExport">Copy</el-button>
      </span>
    </el-dialog>

    <el-dialog title="Import" :visible.sync="showImportDialog" :modal="false" width="30%">
      <textarea :rows="8" v-model="importData" />
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="toggleImportDialog">Close</el-button>
        <el-button size="medium" type="primary" @click="doImport">Import</el-button>
      </span>
    </el-dialog>
  </nav>
</template>

<script setup>
import { ref, inject, computed } from 'vue';

const showExportDialog = ref(false);
const showImportDialog = ref(false);
const importData = ref('');

const editor = inject('editor')

const enabled = computed(() => editor.enabled)

const exportTextarea = ref(null)

function updateState(enabled) {
  if (enabled) {
    editor.enable();
  } else {
    editor.disable();
  }
}

function toggleExportDialog() {
  showExportDialog.value = !showExportDialog.value;
}

function toggleImportDialog() {
  showImportDialog.value = !showImportDialog.value;
}

function copyExport() {
  exportTextarea.select();
  document.execCommand('Copy');
  message.success('Copied!');
}

function doImport() {
  try {
    editor.import(importData);
    $message.success('Imported!');
    importData = '';
    toggleImportDialog();
  } catch ({ message }) {
    message.error(message);
  }
}
</script>

<style  scoped>
.navbar {
  position: relative;
  z-index: 100;
  display: flex;
  height: 50px;
  line-height: 50px;
  padding: 0 13px;
  background-color: white;
  box-shadow: 0 2px 3px rgba($color: #000000, $alpha: 0.03);
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.12);

  .brand {
    font-size: 26px;
    color: black;
  }

  .actions {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: 0 12px;

    &>* {
      margin-left: 15px;
    }
  }

  a {
    display: block;
    color: gray;
    text-decoration: none;

    &:hover {
      color: black;
    }
  }
}

.disable-select {
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>

<style>
.navbar .el-dialog__body {
  padding: 0 24px 12px;

  textarea {
    display: block;
    width: 100%;
    border-radius: 3px;
    color: rgba(0, 0, 0, 0.7);
  }
}
</style>
