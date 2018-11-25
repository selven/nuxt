<template>
  <div class="single-post">
    <div
      v-if="!isLoading"
      class="single-post__article">
      <h1 class="single-post__title">{{ currentStore.fields.name }}</h1>
      <div class="single-post__content">
        <ul
          v-if="currentStore.fields.categories"
          class="single-post__categories">
          <li
            v-for="(category, index) in currentStore.fields.categories" 
            :key="index">
            <nuxt-link :to="'category/' + category.fields.url">{{ category.fields.name }}</nuxt-link>
          </li>
        </ul>
        <img
          v-if="currentStore.fields.testImage"
          :src="resizeImage(currentStore.fields.testImage.fields.file.url)">
      </div>
    </div>
    <p
      v-else
      class="single-post__loading">
      Loading
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    currentStore() {
      return this.$store.state.store.currentStore
    },
    isLoading() {
      return this.$store.state.store.isLoading
    }
  },
  methods: {
    resizeImage(url, width = 100, height = 100) {
      return url + '?w=' + width + '&h=' + height
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('store/getStoreByURL', params._store)
  }
}
</script>
