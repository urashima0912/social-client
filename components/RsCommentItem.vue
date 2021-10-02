<template>
  <div class="rs-comment-item">
    <v-row>
      <v-col cols="4">
        <v-img :src="image" />
      </v-col>
      <v-col cols="8">
        <p class="font-weight-black">{{ email }}</p>
        <p>{{ comment }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
}
</script>
