<template>
  <TheModal
    :isActive="modal.addCategory"
    @close-modal="handleAddCategoryModalClose"
    :isAbsolute="isChild"
    style="z-index:50"
  >
    <template #title>Add Category</template>
    <template #body>
      <BaseInput
        type="text"
        placeholder="Enter Category Name"
        v-model="name"
        label="Enter Category"
      />
    </template>
    <template #footer>
      <button class="button is-link" @click="handleCategoryAddition">Add</button>
      <button class="button" @click="handleAddCategoryModalClose">Close</button>
    </template>
  </TheModal>
</template>

<script>
import TheModal from "@/components/TheModal.vue";
import { mapState, mapActions } from "vuex";
export default {
  props: {
    isChild: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      name: ""
    };
  },
  components: {
    TheModal
  },
  computed: {
    ...mapState(["modal"])
  },
  methods: {
    ...mapActions(["setModalState", "addCategory"]),
    handleAddCategoryModalClose() {
      this.name = "";
      this.setModalState({ type: "addCategory", value: false });
    },
    handleCategoryAddition() {
      if (this.name) {
        if (this.isChild) {
          this.$emit("new-category-added", this.name);
        }
        this.addCategory(this.name);

        this.handleAddCategoryModalClose();
      }
    }
  }
};
</script>

<style>
</style>