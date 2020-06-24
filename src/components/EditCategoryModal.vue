<template>
  <TheModal
    :isActive="modal.editCategory"
    @close-modal="handleEditCategoryModalClose"
    :isAbsolute="false"
    style="z-index:50"
  >
    <template #title>Edit Category</template>
    <template #body>
      <BaseInput
        type="text"
        placeholder="Enter Category Name"
        v-model="cached"
        label="Enter Category"
      />
    </template>
    <template #footer>
      <button class="button is-link" @click="handleCategoryUpdate">Update</button>
      <button class="button" @click="handleEditCategoryModalClose">Close</button>
    </template>
  </TheModal>
</template>

<script>
import TheModal from "@/components/TheModal.vue";
import { mapState, mapActions } from "vuex";
export default {
   data() {
    return {
      category: ''
    };
  },
  props:{
    cat:{
      type:String,
      required:true
    }
  },
 
  components: {
    TheModal
  },
  computed: {
    ...mapState(["modal"]),
    
    cached:{
      get(){
        return this.cat
      },
      set(value){
        this.category = value
      }
    }
    
    
  },
  methods: {
    ...mapActions(["setModalState", "updateCategory"]),
    handleEditCategoryModalClose() {
      this.setModalState({ type: "editCategory", value: false });
    },
    handleCategoryUpdate() {
      if (this.category) {
        this.updateCategory({old:this.cached,new:this.category});
        this.handleEditCategoryModalClose();
      }
    }
  }
};
</script>

<style>
</style>