// import PasswordWidget from '../components/PasswordWiget'

export default {
  name: 'Demo',
  schema: {
    type: 'string',
    properties: {
      pass1: {
        type: 'string',
        // minLength: 10,
        test: true,
        title: 'password',
      },
      pass2: {
        type: 'string',
        minLength: 10,
        title: 're try password',
      },
      color: {
        type: 'string',
        format: 'color',
        title: 'Input Color',
      },
    },
  },
  async customValidate(data: any, errors: any) {
    return new Promise((resolve) => {
      console.log(resolve)
    })
  },
  uiSchema: {
    properties: {
      pass1: {
        // widget: PasswordWidget,
      },
      pass2: {
        color: 'red',
      },
    },
  },
  default: 1111,
}
