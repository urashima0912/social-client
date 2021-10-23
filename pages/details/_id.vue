<template>
  <div class="rs-details-id">
    <RsImageDetails v-if="post" :post="post" :isOwner="isOwner" />
    <RsComment class="mt-4" v-if="showComments" />
    <RsAllComments class="mt-4" :comments="comments" />
  </div>
</template>

<script>
export default {
  async asyncData(ctx) {
    try {
      // -- VIEWS
      const body = JSON.stringify({
        postId: ctx.params.id,
      })
      await fetch('http://localhost:4500/api/post/view', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body,
      })

      // -- LOAD DETAILS
      const token = ctx.store.state.user.token
      const res = await fetch(
        `http://localhost:4500/api/post/details/${ctx.params.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { token } : {}),
          },
        }
      )
      const data = await res.json()
      if (data.err || !data.post) {
        console.log(err)
        ctx.redirect('/home')
      }

      const post = data.post
      const comments = data.comments
      const isOwner = data.isOwner

      return {
        post,
        comments,
        onFetch: undefined,
        isOwner,
      }
    } catch (err) {
      console.log(err)
      ctx.redirect('/home')
    }
  },

  computed: {
    showComments() {
      return this.$store.state.user.token
      // return this.$store.getters['user/getToken']
    },
  },

  mounted() {
    this.onFetch = setInterval(async () => {
      await this.loadDetails()
    }, 1000)
  },

  beforeDestroy() {
    clearInterval(this.onFetch)
  },

  methods: {
    async loadDetails() {
      try {
        const token = this.$store.state.user.token
        const res = await fetch(
          `http://localhost:4500/api/post/details/${this.post._id}`,
          {
            headers: {
              'Content-Type': 'application/json',
              ...(token ? { token } : {}),
            },
          }
        )
        const data = await res.json()

        this.post = data.post
        this.comments = data.comments
      } catch (err) {
        console.log(err)
        this.$router.push('/home')
      }
    },
  },
}
</script>
