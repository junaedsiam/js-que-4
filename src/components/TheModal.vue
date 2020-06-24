<template>
  <div class="modal is-active" :class="{'is-absolute':isAbsolute}" v-if="isActive">
    <div class="modal-background" :class="{'is-absolute':isAbsolute}"></div>
    <div class="modal-card" v-on-clickaway="handleClickAway" :style="{width:isAbsolute?'80%':''}">
      <header class="modal-card-head">
        <p class="modal-card-title">
            <slot name="title"/>
        </p>
        <button class="delete" aria-label="close" @click="handleModalClose"></button>
      </header>
      <section class="modal-card-body">
        <slot name="body"/>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer"/>
      </footer>
      <slot />
    </div>
    
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
    mixins: [ clickaway ],
    props:{
        isActive:{
            type:Boolean,
            default:false
        },
        isAbsolute:{
          type:Boolean,
          default:false
        }
    },
    methods:{
        handleModalClose(){
            this.$emit('close-modal')
        },
        handleClickAway(){
            if(this.isActive) this.$emit('close-modal')
        }
    }
};
</script>

<style>
.modal.is-absolute{
  position: absolute!important;
}
.modal-background.is-absolute{
  background:rgba(47, 47, 47, 0.86)
}
</style>