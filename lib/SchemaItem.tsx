import { defineComponent, PropType, computed } from "vue";
import { Schema, SchemaTypes, FiledPropsDefine } from "./types";
// import StringField from "./fileds/StringField";
import NumberFild from "./fileds/NumberField.vue";
import StringField from "./fileds/StringFiled.vue";
import ObjectField from "./fileds/ObjectField";
import { retrieveSchema } from "./utils";

export default defineComponent({
  name: "SchemaItem",
  props: FiledPropsDefine,
  setup(props) {
    // eslint-disable-next-line
    const retrieveSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props;
    //   console.log(schema,11111);
    //   console.log(rootSchema,2222);
    //  console.log(retrieveSchema(schema, rootSchema, value),333)
      return retrieveSchema(schema, rootSchema, value);
    });

    return () => {
      //eslint-disable-next-line
      const { schema } = props;

      const retrievedSchema = retrieveSchemaRef.value;
      //todo: 如果type没有指定，需要猜测
      let Component: any;
      switch (schema?.type) {
        case SchemaTypes.STRING:
          Component = StringField;
          break;
        case SchemaTypes.NUMBER:
          Component = NumberFild;
          break;
        case SchemaTypes.OBJECT:
          Component = ObjectField;
          break;
        default:
          console.warn("不支持的type类型");
      }
      return <Component {...props} schema={retrievedSchema} />;
    };
  },
});
