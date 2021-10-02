<template>
  <div class="rs-card">
    <v-card>
      <v-card-title
        v-if="header"
        :class="remove ? 'rs-card-title rs-remove' : ' rs-card-title rs-black'"
      >
        <div class="rs-card-remove d-flex justify-space-between" v-if="remove">
          <p class="headline mx-2 white--text">{{ title }}</p>
          <v-btn color="error"> Delete </v-btn>
        </div>
        <div class="rs-card-no-remove d-flex justify-start" v-else>
          <v-icon color="white" size="32" class="mt-n3">{{ icon }}</v-icon>
          <p class="headline mx-2 white--text">{{ title }}</p>
        </div>
      </v-card-title>
      <v-card-text class="pa-1 rs-card-text">
        <div class="rs-card-text-container pa-2">
          <slot />
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    icon: {
      type: String,
      default: undefined,
    },
    remove: {
      type: Boolean,
      default: false,
    },
    header: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

// TODO: Check it
<style>
.rs-black {
  background-color: rgb(39, 39, 39);
}

.rs-remove {
  background-color: rgb(153, 104, 153);
}

.rs-card-title {
  height: 60px;
}

.rs-card-text-container {
  background-color: white;
  overflow: hidden;
  padding-top: 15px;
}

.rs-card-text {
  background-color: rgb(39, 39, 39);
}

.rs-card-remove {
  width: 100%;
}
</style>
