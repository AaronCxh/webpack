
const state = {
  loadData: false
}

const getters = {}

const actions = {}

const mutations = {
  increment (state) {
    // 这里的 `state` 对象是模块的局部状态
    state.count++
  },
  loadDataEnd (state) {
      state.loadData = true;
  }
}

export default {
  nameSpace: true,
  state,
  getters,
  actions,
  mutations
}

