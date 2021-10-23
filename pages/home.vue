<template>
  <div class="rs-home">
    <RsUpload v-if="showUploads" />
    <RsRecentUploads class="mt-4" />
  </div>
</template>

<script>
export default {
  computed: {
    showUploads() {
      return this.$store.state.user.token
      // return this.$store.getters['user/getToken']
    },
  },
}
</script>
