export const state = () => ({
  token: undefined,
})

export const getters = {
  getToken(state) {
    return state.token
  },
}

export const mutations = {
  setToken(state, value) {
    state.token = value
  },
}

export const actions = {
  saveToken(context, value) {
    context.commit('setToken', value)
    localStorage.setItem('token', JSON.stringify(value))
  },

  removeToken(context) {
    context.commit('setToken', undefined)
    localStorage.clear() // TODO.
  },
}
