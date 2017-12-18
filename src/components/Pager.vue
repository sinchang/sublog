<template>
  <div>
    <a id="prev" class="blog-nav" href="javascript:;" @click="prev" v-show="prevVisible">&lt;&nbsp;PREV</a>
    <a id="next" class="blog-nav" href="javascript:;" @click="next" v-show="nextVisible">NEXT&nbsp;&gt;</a>
  </div>
</template>

<script>
  export default {
    name: 'pager',
    data() {
      return {
        page: 1
      }
    },
    props: {
      prevVisible: {
        type: Boolean
      },
      nextVisible: {
        type: Boolean
      }
    },
    methods: {
      prev() {
        this.page--
        this.$emit('change', this.page)
        window.scroll(0, 0)
      },
      next() {
        this.page++
        this.$emit('change', this.page)
        window.scroll(0, 0)
      }
    }
  }
</script>
