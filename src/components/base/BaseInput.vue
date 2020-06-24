<template>
  <div class="field">
    <label class="label" v-if="label">{{label}}</label>
    <div class="control">
      <input class="input" v-bind="$attrs" @input="emitEvent" :value="value"/>
    </div>
  </div>
</template>

<script>
export default {
    inheritAttrs:false,
    props:{
        label:{
            type:String,
        },
        value:{
            type:[Number,String]
        }
    },
    methods:{
        emitEvent(event){
            this.$emit('input',event.target.value)
        }
    }
};
</script>