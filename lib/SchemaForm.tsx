import { defineComponent, PropType ,provide, reactive} from "vue";
import { Schema, SchemaTypes } from "./types";
import SchemaItem from "./SchemaItem";
import {SchemaFormContextKey} from './context'
export default defineComponent({
  name: "schemaForm",
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  setup(props, { slots, emit, attrs }) {
    console.log(SchemaItem, 999);
    const context = {
      SchemaItem,
    };
    // const context:any = reactive({
    //   SchemaItem
    // })
    // let index =1;
    provide(SchemaFormContextKey, context);
    // setInterval(()=>{
    //  context.SchemaItem =index++;
    // },500)
    return () => {
      const { schema, value } = props;
      console.log(schema, "-----------schemaForm");
      const handleChange = (v: any) => {
        props.onChange(v);
      };
      return (
        <SchemaItem
          schema={schema}
          rootSchema={schema}
          value={value}
          onChange={handleChange}
        />
      );
    };
  },
});
