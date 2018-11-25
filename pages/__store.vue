<template>
  <div class="single-post">
    <div
      v-if="!isLoading"
      class="single-post__article">
      <h1 class="single-post__title">{{ currentPost.fields.name }}</h1>
      <div class="single-post__content">
        {{ currentPost.fields.testImage.fields }}
        <img :src="currentPost.fields.testImage.fields.file.url">
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
    currentPost() {
      return this.$store.state.store.currentPost
    },
    isLoading() {
      return this.$store.state.store.isLoading
    }
  },
  async fetch({ store, params }) {
    console.log('params', params)
    await store.dispatch('store/getStoreByURL', params._store)
  }
}
</script>
