<template>
  <div class="rs-recent-uploads">
    <RsCard title="Recent Upload" icon="mdi-folder-multiple-image">
      <v-row class="rs-recent-uploads-container">
        <v-col cols="3" v-for="post in posts" :key="post._id">
          <v-card @click="onClick(post._id)">
            <v-card-text>
              <v-img :src="post.image"></v-img>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </RsCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      onFetch: undefined,
    }
  },

  async mounted() {
    await this.loadPost()
    this.onFetch = setInterval(async () => {
      await this.loadPost()
    }, 2000)
  },

  beforeDestroy() {
    clearInterval(this.onFetch)
  },

  methods: {
    async loadPost() {
      try {
        const res = await fetch('http://localhost:4500/api/post/recentUploads')
        const data = await res.json()
        if (data.err) {
          console.log(err.message)
          return
        }
        this.posts = []
        for (const post of data.uploads) {
          this.posts.push(post)
        }
      } catch (err) {
        console.log(err.message)
      }
    },

    onClick(postId) {
      this.$router.push(`/details/${postId}`)
    },
  },
}
</script>
