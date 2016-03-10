var Vue = require('vue');
//引入我们写的组件
var hello = require('../view/index.vue');

new Vue({
    el: 'body',
    components: {
        v_hello : hello
    }
});