<template>
  <div class="rs-all-comments">
    <RsCard :header="false">
      <div class="rs-all-comments-container">
        <v-row v-for="(obj, index) in comments" :key="index">
          <v-col cols="4" class="text-center">
            <v-avatar size="110">
              <v-img :src="obj.avatar" />
            </v-avatar>
          </v-col>
          <v-col cols="8">
            <p class="subtitle-1 font-weight-black">{{ obj.title }}</p>
            <p>{{ obj.comment }}</p>
          </v-col>
          <v-col cols="12" v-if="index != comments.length - 1">
            <v-divider class="rs-divider my-4"></v-divider>
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
      comments: [
        {
          id: 1,
          email: 'pepe@gmail.com',
          title: 'title 1',
          avatar:
            'https://i.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ',
          comment: 'lorem picsum comment 1',
        },
        {
          id: 2,
          email: 'juan@gmail.com',
          title: 'title 2',
          avatar:
            'https://i.picsum.photos/id/1026/4621/3070.jpg?hmac=OJ880cIneqAKIwHbYgkRZxQcuMgFZ4IZKJasZ5c5Wcw',
          comment: 'lorem picsum comment 2',
        },
        {
          id: 3,
          email: 'jose@gmail.com',
          title: 'title 3',
          avatar:
            'https://i.picsum.photos/id/1028/5184/3456.jpg?hmac=WhttNfn25eTgLTNnhRujSq4IVjx2mMa6wvPG1c6qMVc',
          comment: 'lorem picsum comment 3',
        },
      ],
    }
  },
}
</script>
