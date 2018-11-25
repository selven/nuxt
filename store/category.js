import client from '../plugins/contentful'

export const state = () => ({
  currentCategory: {},
  stores: [],
  isLoading: true
})

export const mutations = {
  setCurrentCategory(state, payload) {
    state.currentCategory = payload
  },
  setStores(state, payload) {
    state.stores = payload
  },
  setLoading(state, payload) {
    state.isLoading = payload
  }
}

export const actions = {
  async getCategoryByURL({ commit }, url) {
    commit('setLoading', true)
    const response = await client.getEntries({
      content_type: 'categories',
      'fields.url': url
    })
    commit('setCurrentCategory', response.items[0])
    commit('setLoading', false)
  },

  async getStoresByCategory({ commit, state }, id) {
    commit('setLoading', true)
    const response = await client.getEntries({
      content_type: 'store',
      'fields.categories.sys.id': state.currentCategory.sys.id
    })
    commit('setStores', response)
    commit('setLoading', false)
  }
}
