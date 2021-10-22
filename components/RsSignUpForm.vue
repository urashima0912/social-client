<template>
  <div class="rs-sign-up-form mt-4">
    <v-row>
      <v-col class="col-md-6 offset-md-3">
        <v-card>
          <v-card-title class="d-flex justify-center">
            <p>Sign Up</p>
          </v-card-title>
          <v-card-text>
            <v-file-input
              v-model="avatar"
              placeholder="avatar"
              outlined
              prepend-icon=""
              name="avatar"
              required
            />
            <v-text-field
              v-model="email"
              placeholder="email"
              outlined
              name="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              placeholder="password"
              type="password"
              outlined
              name="password"
              required
            ></v-text-field>
            <v-text-field
              v-model="password2"
              placeholder="Repeat password"
              type="password"
              outlined
              name="password2"
              required
            ></v-text-field>
            <v-btn color="success" block @click="onSubmit">Submit</v-btn>
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
      avatar: undefined,
      valid: true,
      password: '',
      password2: '',
      email: '',
    }
  },

  methods: {
    async onSubmit() {
      if (this.password !== this.password2) {
        alert('Contraseñas diferentes')
        return
      }

      const formData = new FormData()
      formData.enctype = 'multipart/form-data'
      formData.append('avatar', this.avatar)
      formData.append('email', this.email)
      formData.append('password', this.password)

      try {
        const res = await fetch('http://localhost:4500/api/user/signUp', {
          method: 'POST',
          body: formData,
        })
        const data = await res.json()
        if (data.err) {
          alert(data.err)
        } else {
          this.$router.push('/sign-in')
        }
      } catch (err) {
        alert(err.message)
      }
    },
  },
}
</script>
