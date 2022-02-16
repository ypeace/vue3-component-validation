import { createApp, defineComponent, h } from "vue"; 
// import App from "./App.vue";
import App from './App';


// import img2 from './assets/logo.png';//eslint-disable-line
// const  App = defineComponent({
//   render(){
//       return h("div",{id:'app'},[
//           h("img",{
//               alt:'vue logo',
//               src: img2
//           }),
//           h(HelloWorld,{
//             msg:'hello 你好1', 
//           })
//       ])
//   }
// })
createApp(App).mount("#app");
