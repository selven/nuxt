<template>
  <section class="container">
    <div>
      <h2>Latest Stores</h2>
      <ul v-if="stores">
        <li
          v-for="(store, index) in stores" 
          :key="index">
          <nuxt-link :to="store.fields.url">{{ store.fields.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    stores() {
      return this.$store.state.stores.stores
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('stores/getStores', params.url)
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
