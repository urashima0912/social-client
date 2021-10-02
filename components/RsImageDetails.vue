<template>
  <div class="rs-image-details">
    <RsCard :title="title" :remove="true">
      <div class="rs-image-details-container">
        <v-img src="https://picsum.photos/id/237/200/300" height="400px" />
        <div class="rs-image-details-container-description">
          <p class="headline font-weight-black">{{ title }}</p>
          <p>{{ description }}</p>
        </div>
        <div class="rs-image-details-container-info d-flex">
          <div
            class="rs-image-details-container-info-start d-flex justify-start"
          >
            <v-btn color="success">
              <v-icon class="mx-2">mdi-thumb-up</v-icon>
              like
            </v-btn>
            <div class="mx-12">
              <v-icon class="d-flex justify-center">mdi-cards-heart</v-icon>
              <p>Likes 12</p>
            </div>
            <div class="mx-12">
              <v-icon class="d-flex justify-center">mdi-eye-settings</v-icon>
              <p>View 4</p>
            </div>
          </div>
          <v-spacer></v-spacer>
          <div class="rs-image-details-container-info-end">
            <p>12/05/2021</p>
          </div>
        </div>
      </div>
    </RsCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Imagen title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>
