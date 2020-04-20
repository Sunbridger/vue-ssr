const Vue = require('vue');

module.exports = (context) => new Vue({
    data: {
        name: 'vue app~',
        url: context.url
    },
    template: '<div>hello from {{name}}, and url is: {{url}}</div>'
});
