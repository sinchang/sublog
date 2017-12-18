<template>
  <div>
    <div class="post" v-show="body">
      <h4 class="date">{{ issue.created_at | moment("MMM DD, YYYY") }} By <a :href="issue.user.html_url">{{ issue.user.login }}</a></h4>
      <h1>{{ issue.title }}</h1>
      <div class="content" v-html="body">
      </div>
    </div>
  </div>
</template>
<script>
  import { ajax, getPostApi } from '../util.js'
  import marked from 'marked'

  export default {
    name: 'post',
    data() {
      return {
        issue: {},
        body: ''
      }
    },
    created() {
      this.fetchSingleIssue()
    },
    methods: {
      fetchSingleIssue() {
        this.issue = {}
        this.body = ''
        ajax(getPostApi(this.$route.params.id)).then(res => {
          this.issue = res.data
          this.body = marked(res.data.body)
        }).catch(err => {
          alert(err.response.data.message)
        })
      }
    }
  }
</script>
