<template>
  <div class="rs-image-details">
    <RsCard :title="post.title" :remove="isOwner">
      <div class="rs-image-details-container">
        <v-img :src="post.image" height="400px" />
        <div class="rs-image-details-container-description">
          <p class="headline font-weight-black">{{ title }}</p>
          <p>{{ post.description }}</p>
        </div>
        <div class="rs-image-details-container-info d-flex">
          <div
            class="rs-image-details-container-info-start d-flex justify-start"
          >
            <v-btn color="success" @click="onLike">
              <v-icon class="mx-2">mdi-thumb-up</v-icon>
              like
            </v-btn>
            <div class="mx-12">
              <v-icon class="d-flex justify-center">mdi-cards-heart</v-icon>
              <p>Likes {{ post.likes }}</p>
            </div>
            <div class="mx-12">
              <v-icon class="d-flex justify-center">mdi-eye-settings</v-icon>
              <p>View {{ post.views }}</p>
            </div>
          </div>
          <v-spacer></v-spacer>
          <div class="rs-image-details-container-info-end">
            <p>12/05/2021</p>
          </div>
        </div>
      </div>
    </RsCard>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    isOwner: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      title: 'Imagen title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },

  methods: {
    async onLike() {
      try {
        const body = JSON.stringify({
          postId: this.post._id,
        })

        const res = await fetch('http://localhost:4500/api/post/like', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'post',
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
