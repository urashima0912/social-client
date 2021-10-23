<template>
  <div class="rs-comment">
    <RsCard title="Comment">
      <v-text-field v-model="title" placeholder="title" outlined>
      </v-text-field>
      <v-textarea v-model="description" placeholder="Comment" outlined>
      </v-textarea>
      <v-btn color="success" @click="onSubmit">Post</v-btn>
    </RsCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
    }
  },

  methods: {
    async onSubmit() {
      try {
        const token = this.$store.getters['user/getToken']
        const postId = this.$route.params.id

        const body = JSON.stringify({
          title: this.title,
          description: this.description,
          postId,
        })

        const res = await fetch('http://localhost:4500/api/comment/create', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            token,
          },
          body,
        })
        const data = await res.json()
        if (data.err) {
          console.log(err)
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
