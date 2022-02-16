import { defineComponent, PropType ,provide} from "vue";
import { Schema } from "./types";
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
  setup(props) { 
    const context = {
      SchemaItem,
    };
    // const context:any = reactive({
    //   SchemaItem
    // })
    // let index =1;
    // setInterval(()=>{
    //  context.SchemaItem =index++;
    // },500)
    provide(SchemaFormContextKey, context);
    
    return () => {
      const { schema, value } = props;
      console.log(schema, "-----------schemaForm里的schema");
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
