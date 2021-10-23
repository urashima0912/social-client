<template>
  <div class="rs-latest-comments">
    <RsCard title="Latest comments" icon="mdi-comment">
      <RsCommentItem
        v-for="comment in comments"
        :key="comment.comment._id"
        :image="comment.post.image"
        :email="comment.user.email"
        :comment="comment.comment.description"
      />
    </RsCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
    }
  },

  async beforeMount() {
    await this.loadComments()
  },

  methods: {
    async loadComments() {
      try {
        const res = await fetch(
          'http://localhost:4500/api/comment/lastestComments'
        )
        const data = await res.json()
        if (data.err) {
          console.log(err)
          return
        }
        for (const comment of data.comments) {
          this.comments.push(comment)
        }
        console.log({ comments: this.comments })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
