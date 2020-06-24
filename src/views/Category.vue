<template>
  <div id="category">
    <BaseContainer>
      <div class="is-flex" style="justify-content:space-between">
        <BaseHeading>Categories</BaseHeading>
        <button class="button is-link" @click="launchAddCategoryModal">Add Category</button>
      </div>
      <div v-if="categories.length">
        <table class="table is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cat,index) in categories" :key="cat">
              <td>{{index + 1}}</td>
              <td>{{cat}}</td>
              <td>
                <button class="button is-link is-small" style="margin-right:0.6rem;" @click="launchEditCategoryModal(cat)">Edit</button>
                <button class="button is-danger is-small" @click="handleCategoryDelete(cat)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <NoItem v-else />
    </BaseContainer>
    <AddCategoryModal />
    <EditCategoryModal :cat="editState" />
  </div>
</template>

<script>
import AddCategoryModal from '@/components/AddCategoryModal.vue'
import EditCategoryModal from '@/components/EditCategoryModal.vue'
import NoItem from "@/components/NoItem.vue";
import { mapState,mapActions } from "vuex";
export default {
  data(){
    return{
      editState:''
    }
  },
  components: {
    NoItem,
    AddCategoryModal,
    EditCategoryModal
  },
  computed: {
    ...mapState(["categories"])
  },
  methods:{
    ...mapActions(['setModalState','deleteCategory']),
    launchAddCategoryModal(){
      this.setModalState({ type: "addCategory", value: true });
    },
    handleCategoryDelete(cat){
      this.deleteCategory(cat)
    },
    launchEditCategoryModal(cat){
      this.editState = cat
      this.setModalState({ type: "editCategory", value: true });
    }
  }
};
</script>