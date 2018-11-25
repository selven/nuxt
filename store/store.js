import client from '../plugins/contentful'

export const state = () => ({
  currentPost: {},
  isLoading: true
})

export const mutations = {
  setCurrentPost(state, payload) {
    state.currentPost = payload
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
    commit('setCurrentPost', response.items[0])
    commit('setLoading', false)
  }
}
