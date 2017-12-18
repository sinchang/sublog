<template>
  <div>
    <ul>
      <li v-for="issue in issues" :key="issue.id">
        <h3 class="created-at">{{ issue.created_at | moment("MMM DD, YYYY") }}</h3>
        <h2>
          <router-link :to="`/post/${issue.number}`">{{ issue.title }}</router-link>
        </h2>
      </li>
    </ul>
    <p v-if="isEmpty" class="text-center">Empty</p>
    <pager @change="cb" :prevVisible="prevVisible" :nextVisible="nextVisible"></pager>
  </div>
</template>

<script>
import { ajax, getIndexApi } from '../util.js'
import Pager from './Pager'

export default {
  name: 'index',
  data() {
    return {
      issues: [],
      page: 1,
      isEmpty: false,
      prevVisible: false,
      nextVisible: true
    }
  },
  created() {
    this.fetchIssues(this.page)
  },
  methods: {
    fetchIssues(page) {
      ajax(getIndexApi(page)).then(res => {
        if (res.data.length === 0) {
          this.isEmpty = true
          this.nextVisible = false
          this.issues = []
          return
        }
        this.isEmpty = false
        this.nextVisible = true
        this.issues = res.data
      }).catch(err => {
        alert(err.response.data.message)
      })
    },
    cb(page) {
      if (page === 1) {
        this.prevVisible = false
      } else {
        this.prevVisible = true
      }
      this.page = page
      this.fetchIssues(this.page)
    }
  },
  components: {
    Pager
  }
}
</script>
