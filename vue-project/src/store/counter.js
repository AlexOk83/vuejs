export default {
  state: {
    counter: 0
  },
  mutations: {
    changeCounter(state, payLoad) {
      state.counter += payLoad
    }
  },
  actions: {
    asyncChangeCounter ({commit}, payload) {
      setTimeout(() => {
        commit('changeCounter', payload.counterValue)
      }, payload.timeOut)
    }
  },
  getters: {
    computedCounter (state) {
      return state.counter * (4 - 2 * (2 + 3))
    }
  }
}
