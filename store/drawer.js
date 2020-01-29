export const state = () => ({
  drawer: false
})

export const mutations = {
  toggle(state, value) {
    state.drawer = value
  }
}
