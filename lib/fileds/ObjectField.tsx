import {
  defineComponent,
  inject,
  watch,
  watchEffect,
  DefineComponent,
  ExtractDefaultPropTypes,
} from "vue";
import { FiledPropsDefine } from "../types";
import { SchemaFormContextKey } from "../context";
import { isObject } from "../utils";
// const shhema = {
//   type: "object",
//   properties: {
//     name: {
//       type: "string",
//     },
//     age: {
//       type: "string",
//     }
//   },
// };
const TypeHelperComponent = defineComponent({
  props: FiledPropsDefine,
});

// type SchemaItemDefine = DefineComponent<typeof FiledPropsDefine>;
type SchemaItemDefine = typeof TypeHelperComponent;
export default defineComponent({
  name: "ObjectField",
  props: FiledPropsDefine,
  setup(props) {
    const context: { SchemaItem: SchemaItemDefine } | undefined =
      inject(SchemaFormContextKey);
    if (!context) {
      throw Error("SchemaForm必须得有啊");
    }
    // console.log(context, 6666);
    //  watchEffect(()=>{
    //    console.log(context.SchemaItem)
    //  })
    const handleChange = (key: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {};
      if (value === undefined) {
        delete value[key];
      } else {
        value[key] = v;
      }
      props.onChange(value);
    };
    return () => {
      const { schema, rootSchema, value } = props;
      console.log(schema,'=========222222schemaschema')

      const { SchemaItem } = context;
      const currentValue: any = isObject(value) ? value : {};
      const properties = schema.properties || {};
      // console.log(properties,'properties')
      // console.log(schema,'schema')
      // return  <div>333</div>;

      return Object.keys(properties).map((k: string, index: number) => (
        <SchemaItem
          schema={properties[k]}
          rootSchema={rootSchema}
          value={currentValue[k]}
          key={index}
          onChange={(value: any) => handleChange(k, value)}
        />
      ));
    };
  },
});
