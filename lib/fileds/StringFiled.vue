<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script lang='ts'>
// import { ref } from "vue";
import { FiledPropsDefine } from "../types";
export default {
  name: "",
  props: FiledPropsDefine,
  setup(props:any) {
    
    const handleChange = (e: any) => {
      props.onChange(e.target.value);
    };
    return {
      valu:props.value,
      handleChange,
    };
  },
};
</script>
<style scoped>
</style>