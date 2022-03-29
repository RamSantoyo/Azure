import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 0
  },
  getters: {
     cuadrado(state){
       return state.contador * state.contador;
     }
  },
  mutations: {
    subirNumero(state, commit){
      state.contador += commit;
    },
    bajarNumero(state, commit){
      state.contador -= commit;
    }
  },
  actions: {
    async subirContador({ commit }){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')

      const results = await res.json();
      commit("subirNumero", results)
    },
    async bajarContador({ commit }){
      const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')

      const results = await res.json();
      commit("bajarNumero", results)
    }
  },
  modules: {
  }
})
