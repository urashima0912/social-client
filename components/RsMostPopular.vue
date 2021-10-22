<template>
  <div class="rs-most-popular">
    <RsCard title="Most popular" icon="mdi-camera-image">
      <div class="rs-images-container">
        <v-row class="pa-2">
          <v-col
            cols="6"
            v-for="post in posts"
            :key="post._id"
            class="rs-images-container-item mt-n3"
          >
            <v-img :src="post.image" @click="onClick(post._id)"> </v-img>
          </v-col>
        </v-row>
      </div>
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

  async beforeMount() {
    this.onFetch = setInterval(async () => {
      await this.loadMostPopular()
    }, 2000)
  },

  destroyed() {
    clearInterval(this.onFetch)
  },

  methods: {
    async loadMostPopular() {
      try {
        const res = await fetch('http://localhost:4500/api/post/mostPopular')
        const data = await res.json()
        if (data.err) {
          console.log(err)
          return
        }

        this.posts = []

        data.uploads.forEach((post) => {
          this.posts.push(post)
        })
      } catch (err) {
        console.log(err)
      }
    },

    onClick(postId) {
      this.$router.push(`/details/${postId}`)
    },
  },
}
</script>
