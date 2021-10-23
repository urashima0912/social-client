<template>
  <div class="rs-all-comments">
    <RsCard :header="false">
      <div class="rs-all-comments-container">
        <v-row v-for="(comment, index) in comments" :key="index">
          <v-col cols="4" class="text-center">
            <v-avatar size="110">
              <v-img :src="comment.user.avatar" />
            </v-avatar>
          </v-col>
          <v-col cols="8">
            <p class="subtitle-1 font-weight-black">{{ comment.title }}</p>
            <p>{{ comment.description }}</p>
          </v-col>
          <v-col cols="12" v-if="index != comments.length - 1">
            <v-divider class="rs-divider my-4"></v-divider>
          </v-col>
        </v-row>
      </div>
    </RsCard>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
}
</script>
