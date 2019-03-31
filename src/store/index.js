// Entry Point TTo Veux To Compile All Our Modules
import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos.js';

// Load Vue
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules: {
        todos
    }
});