<template>
    <div
      v-for="tab in tabs"
      :key="tab.key"
      :class="[
        'tab-title',
        {
          'tab-title--selected': tab.key === selectedTabState.selectedTabKey,
        },
      ]"
      @click="selectedTabState.selectedTabKey = tab.key"
    >
      {{ tab.title }}
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, provide, reactive } from "vue";
  
  export default {
    setup(props, { slots }) {
      const tabs = ref([]);
      const selectedTabState = reactive({ selectedTabKey: null });
      provide("selectedTabState", selectedTabState);
      onMounted(function () {
        tabs.value = slots.default().map((i) => {
          if (i.props && i.props["tab-key"]) {
            return {
              key: i.props["tab-key"],
              title: i.props.title,
            };
          }
        });
        selectedTabState.selectedTabKey = tabs.value[0] && tabs.value[0].key;
      });
      return { tabs, selectedTabState };
    },
  };
  </script>
  
  <style>
  .tab-title {
    padding: 15px;
    display: inline-block;
    border-bottom: 3px solid transparent;
    cursor: pointer;
    color: #000000;
  }
  .tab-title--selected {
    font-weight: bold;
    border-bottom: 3px solid #020202;
  }
 
  </style>