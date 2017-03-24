<template>
  <div id="app">
    <vheader></vheader>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer class="footer text-center">
      <p>
        <span>theme based on </span>
        <a href="http://blog.evanyou.me/">blog.evanyou.me</a>
        <span>| proudly powered by</span>
        <a href="https://github.com/sinchang/sublog">sublog</a>
      </p>
    </footer>
  </div>
</template>

<script>
  import Vheader from './Header'

  export default {
    name: 'app',
    components: {
      Vheader
    }
  }
</script>

<style src="../css/common.css"></style>
<style src="../css/index.css"></style>
<style src="../css/post.css"></style>
<style src="../../node_modules/nprogress/nprogress.css"></style>
<style>

</style>
