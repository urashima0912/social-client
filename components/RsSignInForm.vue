<template>
  <div class="rs-sign-in-form mt-4">
    <v-row>
      <v-col class="col-md-6 offset-md-3">
        <v-card>
          <v-card-title class="d-flex justify-center">
            <p>Sign In</p>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="email"
              placeholder="email"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="password"
              placeholder="password"
              type="password"
              outlined
            ></v-text-field>
            <v-btn
              color="success"
              block
              @click="onSubmit"
              @keyup.enter="onSubmit"
              >Submit</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async onSubmit() {
      try {
        if (this.email.length < 4 || this.password.length < 4) {
          alert('Campos requeridos!')
          return
        }

        const body = JSON.stringify({
          email: this.email,
          password: this.password,
        })

        const res = await fetch('http://localhost:4500/api/user/signIn', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body,
        })

        const data = await res.json()
        if (data.err) {
          alert(data.err)
          return
        }

        this.$store.dispatch('user/saveToken', data.token)
      } catch (err) {
        alert(err.message)
      }
    },
  },
}
</script>
