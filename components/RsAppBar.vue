<template>
  <div class="rs-app-bar">
    <v-app-bar app dark>
      <v-toolbar-title>
        <v-btn to="/home" plain>Red Social</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="!token">
        <v-btn text class="mx-2" to="/sign-in">Sign In</v-btn>
        <v-btn text to="/sign-up">Sign Up</v-btn>
      </div>
      <div v-else>
        <v-btn @click="logout">Logout</v-btn>
        <v-avatar v-if="avatar">
          <img :src="avatar" alt="John" />
        </v-avatar>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      avatar: undefined,
    }
  },

  created() {
    if (process.client) {
      console.log({ ctx: this })
      this.token = localStorage.getItem('token')
      this.avatar = localStorage.getItem('avatar')
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
