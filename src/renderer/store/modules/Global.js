const state = {
  isLogined: true
}

const mutations = {
  SET_LOGIN (state) {
    state.isLogined = true
  },
  SET_LOGOUT (state) {
    state.isLogined = false
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
