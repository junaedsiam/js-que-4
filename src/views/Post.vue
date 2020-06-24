<template>
  <div class="product">
    <BaseContainer>
      <div class="is-flex" style="justify-content:space-between">
        <BaseHeading>Posts</BaseHeading>
        <button class="button is-link" @click="launchAddPostModal">Add Post</button>
      </div>
      <div v-if="posts.length">
        <table class="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Title</th>
              <th>Body</th>
              <th>Categories</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="(post,index) in posts" :key="post.id">
              <td>{{index + 1}}</td>
              <td>{{post.title}}</td>
              <td>{{post.body}}</td>
              <td>{{post.categories.join(',')}}</td>
              <td><button class="button is-link is-small" style="margin-right:0.6rem;" @click="launchEditPostModal(post)">Edit</button><button class="button is-danger is-small" @click="handlePostDelete(post.id)">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <NoItem v-else/>
    </BaseContainer>
    <AddPostModal />
    <EditPostModal :post="editState" />
  </div>
</template>

<script>
import EditPostModal from '@/components/EditPostModal.vue'
import AddPostModal from '@/components/AddPostModal.vue'
import NoItem from '@/components/NoItem.vue'
import {mapActions,mapState} from 'vuex'
export default {
  data(){
    return{
      editState:{}
    }
  },
  components:{
    NoItem,
    AddPostModal,
    EditPostModal
  },
  computed:{
    ...mapState(['posts'])
  },
  methods:{
    ...mapActions(['setModalState','deletePost']),
    launchAddPostModal(){
      this.setModalState({type:'addPost',value:true})
    },
    handlePostDelete(id){
      this.deletePost(id)
    },
    launchEditPostModal(post){
      this.editState = post
      this.setModalState({type:'editPost',value:true})
    }
  }
}
</script>
