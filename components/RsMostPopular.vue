<template>
  <div class="rs-most-popular">
    <RsCard title="Most popular" icon="mdi-camera-image">
      <div class="rs-images-container">
        <v-row class="pa-2">
          <v-col
            cols="6"
            v-for="image in images"
            :key="image.id"
            class="rs-images-container-item mt-n3"
          >
            <v-img :src="image.url"> </v-img>
          </v-col>
        </v-row>
      </div>
    </RsCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          url: 'https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ',
        },
        {
          id: 2,
          url: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
        },
        {
          id: 3,
          url: 'https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w',
        },
        {
          id: 4,
          url: 'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        },
        {
          id: 5,
          url: 'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        },
        {
          id: 6,
          url: 'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        },
      ],
    }
  },
}
</script>
