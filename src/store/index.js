import Vue from 'vue'
import Vuex from 'vuex'
import {setState} from '@/storage.js'
Vue.use(Vuex)

const sendDataToLocalStorage = (state)=>{
  const {posts,categories} = state
  setState({posts, categories})
}

export default new Vuex.Store({
  state: {
    modal:{
      addPost:false,
      editPost:false,
      addCategory:false,
      editCategory:false
    },
    posts:[],
    categories:[]
  },
  mutations: {
    SET_POSTS_CATEGORIES(state,payload){
      state.posts = payload.posts 
      state.categories = payload.categories
    },
    SET_MODAL_STATE(state,payload){
      state.modal[payload.type] = payload.value
    },
    ADD_POST(state,payload){
      state.posts.unshift(payload)
    },
    UPDATE_POST(state,payload){
      const index = state.posts.findIndex(post=>post.id===payload.id)
      state.posts.splice(index,1,payload)
    },
    DELETE_POST(state,payload){
      state.posts = state.posts.filter(post=>post.id!==payload)
    },
    ADD_CATEGORY(state,payload){
      state.categories.unshift(payload)
    },
    UPDATE_CATEGORY(state,payload){
      state.categories = state.categories.map(category=>{
        if(category==payload.old){
          return payload.new
        }
        return category
      })
    },
    DELETE_CATEGORY(state,payload){
      state.categories = state.categories.filter(category=>category!==payload)
    }
  },
  actions: {
    setModalState({commit},payload){
      commit('SET_MODAL_STATE',payload)
    },
    addPost({commit,state},payload){
      commit('ADD_POST',payload)
      sendDataToLocalStorage(state)
    },
    deletePost({commit,state},payload){
      commit('DELETE_POST',payload)
      sendDataToLocalStorage(state)
    },
    updatePost({commit,state},payload){
      commit('UPDATE_POST',payload)
      sendDataToLocalStorage(state)
    },
    addCategory({commit,state},payload){
      commit('ADD_CATEGORY',payload)
      sendDataToLocalStorage(state)
    },
    updateCategory({commit,state},payload){
      commit('UPDATE_CATEGORY',payload)
      sendDataToLocalStorage(state)
    },
    deleteCategory({commit,state},payload){
      commit('DELETE_CATEGORY',payload)
      sendDataToLocalStorage(state)
    },
    setInitialState({commit},payload){
      commit('SET_POSTS_CATEGORIES',payload)
    }
  },
  modules: {
  }
})
