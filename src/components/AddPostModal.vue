<template>
  <TheModal :isActive="modal.addPost" @close-modal="handleAddPostModalClose">
    <template #title>Add Post</template>
    <template #body>
      <BaseInput type="text"  placeholder="Enter Post title" v-model="title" label="Enter Post Title" />
      <BaseTextarea placeholder="Enter Post Body" v-model="body" label="Enter Post Body" />
      <div class="field">
        <label class="label">Add Category</label>
        <CategoryMultiSelect v-model="categories" />
      </div>
    </template>
    <template #footer>
        <button class="button is-link" @click="savePost">Add</button>
        <button class="button" @click="handleAddPostModalClose">Close</button>
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
  data(){
    return{
      id:uuidv4(),
      title:'',
      body:'',
      categories:[]
    }
  },
  components: {
    TheModal,
    CategoryMultiSelect,
    AddCategoryModal
  },
  computed: {
    ...mapState(["modal"])
  },
  methods: {
    ...mapActions(["setModalState","addPost"]),
    handleAddPostModalClose() {
      this.setModalState({ type: "addPost", value: false });
      this.setModalState({ type: "addCategory", value: false });
    },
    savePost(){
      if(this.title && this.body && this.categories.length){
        const post = {
          title:this.title,
          body: this.body,
          categories:this.categories
        }
        this.addPost(post)
        this.handleAddPostModalClose()
      }
    },
    handleOnFlyCategoryAddition(value){
      this.categories.push(value)
    }
  }
};
</script>

<style>
</style>