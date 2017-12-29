<template>
  <div class="v-input">
    <input 
      :type="type"
      :name="name"
      :style="styleObj"
      :autofocus="focus"
      v-model="model"
      :placeholder="emptyText">
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      model: null
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String
    },
    styleObj: {
      type: Object,
      default: function () {
        return {
        }
      }
    },
    emptyText: {
      type: String
    },
    focus: {
      type: String
    }
  },
  watch: {
    model: function (newValue, oldValue) {
      this.$emit('changeValue', newValue, oldValue)
    }
  }
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,  
input[type=number]::-webkit-outer-spin-button {  
  -webkit-appearance: none;  
}
input {
  width: 100%;
  height: 42px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-indent: 40px;
  font-size: 15px;
  padding-right: 10px;
}
input:focus,
input:hover {
  border-color: #0f56a9;
}
.v-input {
  position: relative;
  font-size: 22px;
  color: #666;
}
.v-input:before {
  position: absolute;
  line-height: 42px;
  text-indent: 8px;
}
</style>
