<template>
  <TheModal :isActive="modal.editPost" @close-modal="handleEditPostModalClose">
    <template #title>Edit Post</template>
    <template #body>
      <BaseInput type="text"  placeholder="Enter Post title" v-model="post.title" label="Enter Post Title" />
      <BaseTextarea placeholder="Enter Post Body" v-model="post.body" label="Enter Post Body" />
      <div class="field">
        <label class="label">Add Category</label>
        <CategoryMultiSelect v-model="post.categories" />
      </div>
    </template>
    <template #footer>
        <button class="button is-link" @click="savePost">Update</button>
        <button class="button" @click="handleEditPostModalClose">Close</button>
    </template>
    <AddCategoryModal :isChild="true" @new-category-added="handleOnFlyCategoryAddition"/>
  </TheModal>
</template>

<script>
import TheModal from "@/components/TheModal.vue";
import AddCategoryModal from '@/components/AddCategoryModal.vue'
import CategoryMultiSelect from '@/components/CategoryMultiSelect.vue'
import { mapState, mapActions } from "vuex";
import { v4 as uuidv4 } from 'uuid';

export default {
  props:{
    post:{
      type:Object,
      required:true
    }
  },
  // data(){
  //   return{
  //     id:uuidv4(),
  //     title:'',
  //     body:'',
  //     categories:[]
  //   }
  // },
  components: {
    TheModal,
    CategoryMultiSelect,
    AddCategoryModal
  },
  computed: {
    ...mapState(["modal"])
  },
  methods: {
    ...mapActions(["setModalState","updatePost"]),
    handleEditPostModalClose() {
      this.setModalState({ type: "editPost", value: false });
      this.setModalState({ type: "addCategory", value: false });
    },
    savePost(){
      if(this.post.title && this.post.body && this.post.categories.length){
      
        this.updatePost(this.post)
        this.handleEditPostModalClose()
      }
    },
    handleOnFlyCategoryAddition(value){
      this.post.categories.push(value)
    }
  }
};
</script>

<style>
</style>