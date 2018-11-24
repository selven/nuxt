<template>
  <section class="container">
    <div>
      <h2>Latest Stores</h2>
      <ul v-if="stores">
        <li
          v-for="(store, index) in stores" 
          :key="index">
          {{ store.fields.name }}
          <!-- <nuxt-link :to="store.fields.slug" /> -->
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    stores() {
      return this.$store.state.store.stores
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('store/getStores', params.name)
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
