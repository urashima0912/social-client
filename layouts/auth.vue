<template>
  <div class="rs-layout-auth">
    <v-app>
      <RsAppBar />
      <v-main>
        <v-container>
          <v-row>
            <v-col>
              <Nuxt />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  watch: {
    '$store.state.user.token'(value) {
      if (value) {
        this.$router.push('/home')
      }
    },
  },
}
</script>
