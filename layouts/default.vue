<template>
  <div class="rs-layout-default">
    <v-app>
      <RsAppBar />
      <v-main>
        <v-container>
          <v-row>
            <v-col cols="8">
              <Nuxt />
            </v-col>
            <v-col cols="4">
              <RsStats />
              <RsMostPopular class="mt-4" />
              <RsLatestComments class="mt-4" />

              <!-- <RsCard title="Titulo 2" icon="mdi-braille" />
              <RsCard title="Titulo 3" icon="mdi-koala" /> -->
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  beforeMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.$store.commit('user/setToken', token)
    }
  },
  watch: {
    '$store.state.user.token'(value) {
      if (!value) {
        this.$router.push('/sign-in')
      }
    },
  },
}
</script>
