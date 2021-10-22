<template>
  <div class="rs-stats">
    <RsCard title="Stats" icon="mdi-chart-box">
      <v-list
        ><v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-file-image</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Images {{ stats.images }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-comment</v-icon>
          </v-list-item-icon>
          <v-list-item-content
            >Comments {{ stats.comments }}</v-list-item-content
          >
        </v-list-item>

        <v-list-item
          ><v-list-item-icon>
            <v-icon>mdi-eye-settings</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Views {{ stats.views }}</v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-thumb-up</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Likes {{ stats.likes }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </RsCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: {
        images: 0,
        comments: 0,
        views: 0,
        likes: 0,
      },
      onFetch: undefined,
    }
  },

  async beforeMount() {
    this.onFetch = setInterval(async () => {
      await this.loadStats()
    }, 2000)
  },

  beforeDestroy() {
    clearInterval(this.onFetch)
  },

  methods: {
    async loadStats() {
      try {
        const res = await fetch('http://localhost:4500/api/post/stast')
        const data = await res.json()
        if (data.err) {
          console.log(err)
          return
        }

        this.stats = data
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
