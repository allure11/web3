import {createStore} from 'vuex'

const store = createStore({
  state: {
    // 链上地址
    address: []
  },
  mutations: {
    insertAddress: (state, chainAddress:string[]) => {
      state.address = chainAddress
    },
    deleteAddress: (state) => {
      state.address = []
    }
  },
  actions: {},
  modules: {}
})

export default store