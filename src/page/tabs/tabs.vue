<template>
 <div>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', {active: currentTab === tab}]"
      v-on:click="currentTab = tab"
    >{{ tab }}</button>

    <transition name="component-fade" mode="out-in">
      <keep-alive>
        <component
        v-bind:is="currentTabComponent"
        class="tab"
        ></component>
      </keep-alive>
    </transition>
 </div>
</template>

<script>
import TabPosts from './TabPosts'
import TabArchive from './TabArchive'

export default {
  name: 'Tabs',
  data () {
    return {
      currentTab: 'Posts',
      tabs: ['Posts', 'Archive']
    }
  },
  components: {
    // Posts: {template: '<p>hello</p>'},
    // Posts2: {template: '<p>hello</p>'}
    TabPosts,
    TabArchive
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
}
</script>

<style>
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
    outline: none;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
