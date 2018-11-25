<template>
  <div class="single-post">
    <div
      v-if="!isLoading"
      class="single-post__article">
      <h1 class="single-post__title">{{ currentCategory.fields.name }}</h1>
      <div class="single-post__content">
        {{ currentCategory }}
        <br>
        {{ stores }}
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
    currentCategory() {
      return this.$store.state.category.currentCategory
    },
    stores() {
      return this.$store.state.category.stores
    },
    isLoading() {
      return this.$store.state.category.isLoading
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('category/getCategoryByURL', params._category)
    await store.dispatch('category/getStoresByCategory')
  }
}
</script>
