<template>
  <div>
    <div class="header">
      <a href="/">{{title}}</a>
    </div>
    <p class="links">
      <a :href="item.url" v-for="item in social" :key="item.name" target="_blank">
        <i :class="`fa fa-${item.name}`"></i>
      </a>
    </p>
  </div>
</template>

<script>
import config from '../config.js'

export default {
  name: 'v-header',
  data() {
    return {
      title: config.title,
      social: config.social
    }
  }
}
</script>
