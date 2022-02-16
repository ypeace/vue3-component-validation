import { createVNode, render } from "vue";
import MessageConstructor from './main.vue';

function Message() {
    const container = document.createElement('div');
    const vm = createVNode(MessageConstructor);
    render(vm, container);
    document.body.appendChild(container);
} 
export default Message;