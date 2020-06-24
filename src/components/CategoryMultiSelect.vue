<template>
  <MultiSelect
    :multiple="true"
    :close-on-select="false"
    :searchable="false"
    :options="cats"
    @input="emitEvent"
    v-bind="$attrs"
  >
    <template #beforeList>
      <div class="add-category" @click="handleCategoryModalOpen">Add New Category</div>
    </template>
  </MultiSelect>
</template>

<script>
import MultiSelect from "vue-multiselect";
import { mapState, mapActions } from "vuex";
export default {
 inheritAttrs:false,
  computed:{
      ...mapState({
          cats: (state)=>state.categories
      })
  },
  components: {
    MultiSelect
  },
  methods: {
    ...mapActions(["setModalState"]),  
    handleCategoryModalOpen() {
      this.setModalState({ type: "addCategory", value: true });
    },
    emitEvent(event){
         this.$emit('input',event)
    }
  },
};
</script>

<style>
.add-category {
  cursor: pointer;
  padding: 0.5rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 700;
}
.add-category:hover {
  background: #eaeaea;
}
.multiselect__tags {
  border: 1px solid #c6c6c6;
  font-size: 1rem;
}
.multiselect__option--highlight {
  background: #3273dc;
}
</style>