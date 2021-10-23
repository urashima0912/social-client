<template>
  <div class="rs-upload">
    <RsCard title="Upload" icon="mdi-cloud-upload">
      <div class="rs-upload-container">
        <v-file-input
          v-model="image"
          prepend-icon=""
          outlined
          placeholder="File"
        ></v-file-input>
        <v-text-field
          v-model="title"
          outlined
          name="title"
          placeholder="Image title"
          @keyup.enter="onEnter"
        ></v-text-field>
        <v-textarea
          v-model="description"
          outlined
          name="description"
          placeholder="Description"
        ></v-textarea>
        <div class="rs-btn-container d-flex justify-end">
          <v-btn color="success" @click="onSubmit"> Submit </v-btn>
        </div>
      </div>
    </RsCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: undefined,
      title: '',
      description: '',
    }
  },

  methods: {
    async onSubmit() {
      try {
        const formData = new FormData()
        formData.enctype = 'multipart/form-data'
        formData.append('image', this.image)
        formData.append('title', this.title)
        formData.append('description', this.description)
        const token = localStorage.getItem('token')
        console.log('token: ', token)
        const res = await fetch('http://localhost:4500/api/post/upload', {
          method: 'post',
          headers: {
            token: token,
          },
          body: formData,
        })

        const data = await res.json()
        if (data.err) {
          console.log('xxx [client] err: ', data.err)
        }
      } catch (err) {
        console.log('err: ', err.message)
      }
    },
  },
}
</script>
