<template>
  <input :value="value" @input="handleChange" type="number" />
</template>

<script lang='ts'>
// import { ref } from "vue";
import { FiledPropsDefine } from "../types";
export default {
  name: "",
  props: FiledPropsDefine,
  setup(props:any) {
    const handleChange = (e: any) => {
      const num = Number(e.target.value);
      console.log(e.target.value,Number(e.target.value),'-=-=-=')
      if (num) {
        props.onChange(Number(e.target.value));

      } else {
        props.onChange(0);

      }
    };
    return {
      valu: props.value,
      handleChange,
    };
  },
};
</script>
<style scoped>
</style>