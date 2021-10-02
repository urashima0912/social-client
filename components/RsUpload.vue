<template>
  <div class="rs-upload">
    <RsCard title="Upload" icon="mdi-cloud-upload">
      <div class="rs-upload-container">
        <v-form>
          <v-file-input
            prepend-icon=""
            outlined
            placeholder="File"
          ></v-file-input>
          <v-text-field
            outlined
            name="title"
            placeholder="Image title"
            @keyup.enter="onEnter"
          ></v-text-field>
          <v-textarea
            outlined
            name="description"
            placeholder="Description"
          ></v-textarea>
          <div class="rs-btn-container d-flex justify-end">
            <v-btn color="success"> Submit </v-btn>
          </div>
        </v-form>
      </div>
    </RsCard>
  </div>
</template>

<script>
export default {
  methods: {
    onEnter() {
      console.log('Hola, mundo!')
    },
  },
}
</script>
