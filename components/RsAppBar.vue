<template>
  <div class="rs-app-bar">
    <v-app-bar app dark>
      <v-toolbar-title>Red Social</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="!token">
        <v-btn text class="mx-2" to="/sign-in">Sign In</v-btn>
        <v-btn text to="/sign-up">Sign Up</v-btn>
      </div>
      <div v-else>
        <v-avatar> </v-avatar>
        <v-btn @click="logout">Logout</v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
    }
  },

  created() {
    if (process.client) {
      console.log({ ctx: this })
      this.token = localStorage.getItem('token')
    }
  },

  methods: {
    logout() {
      this.$store.dispatch('user/removeToken')
      // this.$router.push('/home')
    },
  },
}
</script>
