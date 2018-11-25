import client from '../plugins/contentful'

export const state = () => ({
  currentStore: {},
  isLoading: true
})

export const mutations = {
  setCurrentStore(state, payload) {
    state.currentStore = payload
  },
  setLoading(state, payload) {
    state.isLoading = payload
  }
}

export const actions = {
  async getStoreByURL({ commit }, url) {
    commit('setLoading', true)
    const response = await client.getEntries({
      content_type: 'store',
      'fields.url': url
    })
    commit('setCurrentStore', response.items[0])
    commit('setLoading', false)
  }
}
