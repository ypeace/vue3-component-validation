const Ajv = require('ajv');
const localize = require('ajv-i18n');
//format 只有string和number支持
const schema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            // format:'test',
            // test: false, 
            minLength: 10,
            errorMessage: {
                typ:"必须字符串啊",
                minLength:"长度不能小于10啊"
            }

        },
        age: {
            type: "number",
        },
        pets: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        isWorker: {
            type: 'boolean'
        }
    },
    required: ['age'],
};
const schema2 = {
    type: 'string',
    minLength: 10,
};
const data = {
    name: 'juzi',
    age: "20",
    pets: ['1', '2'],
    isWorker: false
};
let ajv = new Ajv({
    allErrors: true,
    jsonPointers: true
});
// require('ajv-errors')(ajv);
require('ajv-errors')(ajv /*, {singleError: true} */ );

// ajv.addFormat("test",()=>{
//     console.log(data,'====')
//     return data==="haha"
// })//自定义format
//自定义关键字

ajv.addKeyword("test", {
    // macro(schema, parentSchema) { //macro的schema会被加到name上，相当于扩展了再schema里增加了某一条
    //     return {
    //         minLength: 10
    //     }
    // }
    // compile(sch, parentSchema) { //parentSchema返回整个的校验规则
    //     console.log(sch, parentSchema);
    //     return () => true;
    // },
    // metaSchema:{//test的类型定义
    //     type:"boolean"
    // }
    // validate(schema, data) {
    //     console.log(schema, data, 111); //schema就是校验时候的自定义关键字的值 data就是这个字段对应的值
    //     if (schema === true) {
    //         return true
    //     } else {
    //         return schema.length === 6
    //     }
    // }
})
let validate = ajv.compile(schema);
let valid = validate(data);
if (!valid) {
    // localize.zh(validate.errors)
    console.log(validate.errors);
}