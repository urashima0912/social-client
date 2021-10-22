<template>
  <div class="rs-sign-in">
    <!-- <RsSignInForm /> -->
  </div>
</template>

<script>
export default {
  layout: 'auth',

  beforeCreate() {
    console.log('xxxx beforeCreate')
    console.log({ server: process.server })
    console.log({ client: process.client })
    console.log('xxxx !beforeCreate')
  },

  mounted() {
    console.log('xxxx mounted')
    console.log({ server: process.server })
    console.log({ client: process.client })
    console.log('xxxx !mounted')
  },

  // created() {
  //   if (process.client) {
  //     const token = localStorage.getItem('token')
  //     if (token) {
  //       this.$router.push('/home')
  //     }
  //   }
  // },
}
</script>
