import client from '../plugins/contentful'

export const state = () => ({
  stores: []
})

export const mutations = {
  setStores(state, payload) {
    state.stores = payload
  }
}

export const actions = {
  async getStores({ commit }) {
    const response = await client.getEntries({
      content_type: 'store'
    })
    console.log('response', response)
    if (response.items.length > 0) {
      commit('setStores', response.items)
    }
  }
}
